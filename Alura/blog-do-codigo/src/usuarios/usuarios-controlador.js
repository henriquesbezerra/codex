const jwt = require('jsonwebtoken');

const blacklist = require('../../redis/manipula-blacklist');
const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');


const criaTokenJWT = (usuario) =>{
  // Criamos o payload
  const payload = {
    id: usuario.id
  };

  return jwt.sign(payload, process.env.KEY_JWT, {
    expiresIn: '15m'
  } );

}

module.exports = {
  async adiciona (req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

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
    const token = criaTokenJWT(req.user);

    /**
     * É recomendado retornar o token da autenticacao
     * dentro do cabecaçalho da requisição no campo Authorization
     * e não no corpo da requisição
     */
    res.set('Authorization', token);
    res.status(204).send();
  },

  async logout(req, res) {
    try {
      const token = req.token;    
      await blacklist.adiciona(token);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({error: error.message})
    }    
  },

  async lista(req, res) {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
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
