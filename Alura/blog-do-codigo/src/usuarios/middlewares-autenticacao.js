/**
 * Middlewares qque fazem o papel do passport autenticate
 * com funções callback customizadas para as regras de negócio
 */
const passport = require('passport');
const Usuario = require('./usuarios-modelo');

const tokens = require('./tokens');

module.exports = {
  /** Middleware de autenticacao para estratégia local */
  local: (req, res, next) => {
    passport.authenticate('local', { session: false }, (erro, usuario, info)=>{
      
      if(erro){
        return next(erro);
      }

      if(!usuario){
        return res.status(401).json();
      }
     // console.log(`Middleware Autenticacao: `, usuario);

      req.user = usuario;
      req.estaAutenticado = true;
      
      return next();
    })(req, res, next);
  },

  bearer: (req, res, next) => {
    passport.authenticate('bearer', { session: false }, (erro, usuario, info)=>{

      if(erro){
        return next(erro);
      }

      if(!usuario){
        return res.status(401).json();
      }

      req.token = info.token; 
      req.user = usuario;
      req.estaAutenticado = true;

      return next();
    })(req, res, next);
  },

  async refresh(req, res, next){
    try {    
      const { refreshToken } = req.body;
      const userId = await tokens.refresh.verifica(refreshToken);
    //  console.log(`Middleware Autenticacao: ${userId}`);
      await tokens.refresh.invalida(refreshToken);
      req.user = await Usuario.buscaPorId(userId);

      return next();
    } catch (error) {
        if(error.name === 'InvalidArgumentError'){
          return res.status(401).json({ erro: error.message });
        }else{
          return res.status(500).json({ erro: error.message });
        }
    }
  },

  async verificacaoEmail(req, res, next){
    try {
      const { token } = req.params;
      const id = await tokens.verificacaoEmail.verifica(token);
      const usuario = await Usuario.buscaPorId(id);
      req.user = usuario;
      return next();
    } catch (error) {
      next(error);
    }
  },

  async verificaTokenReset(req, res, next){
    try {    
      const { token } = req.params;
      const userId = await tokens.redefinirSenha.verifica(token);
    
      await tokens.redefinirSenha.invalida(token);
      req.user = await Usuario.buscaPorId(userId);

      return next();
    } catch (error) {
        if(error.name === 'InvalidArgumentError'){
          return res.status(401).json({ erro: error.message });
        }else{
          return res.status(500).json({ erro: error.message });
        }
    }
  },
};
