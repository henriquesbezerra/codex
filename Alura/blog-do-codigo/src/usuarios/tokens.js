const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment');

const { InvalidArgumentError, InternalServerError } = require('../erros');
const allowListRefreshToken = require('../../redis/allowlist-refresh-token');
const blocklistAccessToken = require('../../redis/blocklist-access-token');

async function criaTokenJWT(id, [tempoQtd, tempoUnd]){
  return jwt.sign(
    { id }, 
    process.env.KEY_JWT, 
    {
      expiresIn: tempoQtd + tempoUnd
    }
  );
}

async function verificaTokenJwt(token, nome, blocklist){

  if(blocklist){
    const result = await blocklist.contemToken(token);
    if(result){
      throw new jwt.JsonWebTokenError(`${nome} inválido pro logout!`);   
    }  
  }    
  
  const { id } = jwt.verify(token, process.env.KEY_JWT);  
  return id;
}

function invalidaTokenJwt(token, blocklist){
  return blocklist.adiciona(token);
}

async function criaTokenOpaco(id, [tempoQtd, tempoUnd], allowlist){
  const tokenOpaco = crypto.randomBytes(24).toString('hex');
  const dataExpiracao = moment().add(tempoQtd, tempoUnd).unix();
  await allowlist.adiciona(tokenOpaco, id, dataExpiracao);
  return tokenOpaco;
}

async function verificaTokenOpaco(token, nome, lista){
  
  if(!token){
    throw new InvalidArgumentError(`${nome} não informado!`);
  }

  const verificaToken = await lista.contemChave(token);  

  if(!verificaToken){
    throw new InvalidArgumentError(`${nome} inválido!`);
  }

  const userId = await lista.buscaValor(token);
  
  return userId;
}

async function invalidaTokenOpaco(token, allowlist){
  return await allowlist.deleta(token);
}

module.exports = {
  access: {
    nome: 'Access token',
    expiracao: [2, 's'],
    lista: blocklistAccessToken,
    
    cria(id){
      return criaTokenJWT(id, this.expiracao);
    },

    verifica(token){
      return verificaTokenJwt(token, this.nome, this.lista);
    },

    invalida(token){
      return invalidaTokenJwt(token, this.lista);
    }

  },

  refresh: {
    nome: 'Refresh token',
    expiracao: [4, 'd'],
    lista: allowListRefreshToken,

    cria(id){
      return criaTokenOpaco(id, this.expiracao, this.lista)
    },

    verifica(token){
      return verificaTokenOpaco(token, this.nome, this.lista);
    },

    invalida(token){
      return invalidaTokenOpaco(token, this.lista);
    }
  },

  verificacaoEmail: {
    nome: 'Token de verificação de e-mail',
    expiracao: [1, 'h'],
        
    cria(id){
      return criaTokenJWT(id, this.expiracao);
    },

    verifica(token){
      return verificaTokenJwt(token, this.nome);
    },

  }
}