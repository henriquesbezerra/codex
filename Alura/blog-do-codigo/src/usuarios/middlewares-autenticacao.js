/**
 * Middlewares qque fazem o papel do passport autenticate
 * com funções callback customizadas para as regras de negócio
 */
const passport = require('passport');
const { InvalidArgumentError } = require('../erros');
const Usuario = require('./usuarios-modelo');
const allowListRefreshToken = require('../../redis/allowlist-refresh-token');

async function verificaRefreshToken(refreshToken){
  if(!refreshToken){
    throw new InvalidArgumentError('Refresh Token não informado!');
  }

  const userId = await allowListRefreshToken.contemChave(refreshToken);  
  if(!userId){
    throw new InvalidArgumentError('Refresh Token inválido!');
  }

  return userId;
}

async function invalidaRefreshToken(refreshToken){
  await allowListRefreshToken.deleta(refreshToken);
}

module.exports = {
  /** Middleware de autenticacao para estratégia local */
  local: (req, res, next) => {
    passport.authenticate('local', { session: false }, (erro, usuario, info)=>{
      
      if(erro && erro.name === 'InvalidArgumenetError'){
        return res.status(401).json({erro: erro.message});
      }

      if(erro){
        return res.status(500).json({erro: erro.message});
      }

      if(!usuario){
        return res.status(401).json();
      }


      req.user = usuario;
      return next();
    })(req, res, next);
  },

  bearer: (req, res, next) => {
    passport.authenticate('bearer', { session: false }, (erro, usuario, info)=>{
      /** Tratar os erros emitidos pelo jwt.veritfy */
      
      if(erro && erro.name === 'JsonWebTokenError'){
        return res.status(401).json({erro: erro.message});
      }

      if(erro && erro.name === 'TokenExpiredError'){
        return res.status(401).json({
          erro: erro.message,
          expiradoEm: erro.expiredAt
        });
      } 

      if(erro){
        return res.status(500).json({erro: erro.message});
      }

      if(!usuario){
        return res.status(401).json();
      }

      req.token = info.token; 

      req.user = usuario;
      return next();
    })(req, res, next);
  },

  async refresh(req, res, next){
    try {    
      const { refreshToken } = req.body;
      const userId = await verificaRefreshToken(refreshToken);
      await invalidaRefreshToken(refreshToken);
      req.user = await Usuario.buscaPorId(userId);
      return next();
    } catch (error) {
        if(error.name === 'InvalidArgumentError'){
          return res.status(401).json({ erro: error.message });
        }else{
          return res.status(500).json({ erro: error.message });
        }
    }
  }
};
