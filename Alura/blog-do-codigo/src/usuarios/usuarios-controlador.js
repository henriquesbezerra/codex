const tokens = require('./tokens');

const { EmailVerificacao } = require('./emails');

const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');


function geraEndereco(rota, token){  
  return `${process.env.BASE_URL}${rota}${token}`;
}

module.exports = {
  async adiciona (req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email,
        emailVerificado: false
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

      const token = await tokens.verificacaoEmail.cria(usuario.id);
      const endereco = geraEndereco('/usuario/verificaemail/', token);
      const emailVerificacao =  new EmailVerificacao(usuario, endereco);
      emailVerificacao.enviaEmail().catch(console.log);
      
      res.status(201).json();
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  async login(req, res){
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
  },

  async logout(req, res) {
    try {
      const token = req.token;    
      await tokens.access.invalida(token);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({error: error.message})
    }    
  },

  async lista(req, res) {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },

  async verificaEmail(req, res){
    try {
      const usuario = req.user;    
      console.log(usuario);
      await usuario.verificaEmail();
      res.status(204).send({message: 'Verificado com sucesso'});
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },

  async deleta(req, res){
    const usuario = await Usuario.buscaPorId(req.params.id);
    try {
      await usuario.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro });
    }
  }
};
