const tokens = require('./tokens');

const { EmailVerificacao, RedefinirSenha } = require('./emails');

const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError, InternalServerError, EntityNotFound } = require('../erros');


function geraEndereco(rota, token){  
  return `${process.env.BASE_URL}${rota}${token}`;
}

module.exports = {
  async adiciona (req, res, next) {
    const { nome, email, senha, cargo } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email,
        emailVerificado: false,
        cargo
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

      const token = await tokens.verificacaoEmail.cria(usuario.id);
      const endereco = geraEndereco('/usuario/verificaemail/', token);
      const emailVerificacao =  new EmailVerificacao(usuario, endereco);
      emailVerificacao.enviaEmail().catch(console.log);
      
      res.status(201).json();
    } catch (erro) {
      next(erro);
    }
  },

  async login(req, res, next){
    try{
      // a propriedade user é inserida na requisicao pelo middleware autenticate quando é finlizado
      const accessToken = await tokens.access.cria(req.user.id);
      const refreshToken = await tokens.refresh.cria(req.user.id);

      /**
       * É recomendado retornar o token da autenticacao
       * dentro do cabecaçalho da requisição no campo Authorization
       * e não no corpo da requisição
       */
      res.set('Authorization', accessToken);
      res.status(200).send({ refreshToken });
    }catch(erro){
      next(erro);
    }
  },

  async logout(req, res, next) {
    try {
      const token = req.token;    
      await tokens.access.invalida(token);
      res.status(204).send();
    } catch (error) {
      next(erro);
    }    
  },

  async lista(req, res) {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },

  async verificaEmail(req, res, next){
    try {
      const usuario = new Usuario(req.user);    
      await usuario.verificaEmail();
      res.status(204).send({message: 'Verificado com sucesso'});
    } catch (error) {
      next(error);
    }
  },

  async deleta(req, res, next){
    const usuario = await Usuario.buscaPorId(req.params.id);
    try {
      await usuario.deleta();
      res.status(200).send();
    } catch (erro) {
      next(erro);
    }
  },

  async esquecisenha(req, res, next){
    const respostaMessage = {
      message: 'Enviaremos para esse email as instruções de redefinição de senha'
    };
    try {
      const usuario = await Usuario.buscaPorEmail(req.body.email);
      
      const token = await tokens.redefinirSenha.cria(usuario.id);
      const endereco = geraEndereco('/usuario/redefinir-senha/', token);    
      const email = new RedefinirSenha(usuario, endereco);
      email.enviaEmail().catch(console.log);

      res.status(200).send(respostaMessage);

    } catch (erro) {
      if(erro instanceof EntityNotFound){
        res.send(respostaMessage);
        return;
      }    
      next(erro);
    }
  },

  async redefinirSenha (req, res, next) {
    
    const { senha, confirmacao  } = req.body;

    try {
      const usuario = new Usuario(req.user);

      if(senha !== confirmacao){
        res.status(500).send('Senhas não conferem');
      }

      await usuario.adicionaSenha(senha);

      await usuario.atualizaSenha();

      const token = await tokens.verificacaoEmail.cria(usuario.id);
      const endereco = geraEndereco('/usuario/verificaemail/', token);
      const emailVerificacao =  new EmailVerificacao(usuario, endereco);
      emailVerificacao.enviaEmail().catch(console.log);
      
      res.status(201).json();
    } catch (erro) {
      next(erro);
    }
    
  },
};
