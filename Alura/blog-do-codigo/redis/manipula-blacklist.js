const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');
const { promisify } = require('util');

const blacklist = require('./blacklist');

/**
 * Funções do cliente Redis funciona da forma assíncrona,
 * a api do node não suporta promisses, por isso para utilizar
 * funcoes que esperam  receber uma função de callback, vamos usar a funcao promisify
 * do módulo util, nativo do nodejs.
 */

const existsAsync = promisify(blacklist.exists.bind(blacklist))
const setAsync = promisify(blacklist.set).bind(blacklist);

const geraTokenHash = token =>{
  return createHash('sha256').update(token).digest("hex");
} 

module.exports = {
  adiciona: async token => {

    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await setAsync(tokenHash,'-.-');
    
    const resultado = await existsAsync(tokenHash);
    console.log(`result: ${resultado}`, resultado);

    blacklist.expireat(tokenHash, dataExpiracao );

  },

  contemToken: async token => {
    const tokenHash = geraTokenHash(token);
    const resultado = await existsAsync(tokenHash);
    console.log('## ',resultado);
    return resultado === 1;
  },
};