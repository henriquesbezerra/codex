const redis = require('redis');
const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');

const manipulaLista = require('./manipula-lista');

const blocklist =  redis.createClient({
  prefix: 'blocklist-access-token:'
});

const manipulaBlockList = manipulaLista(blocklist);

const geraTokenHash = token =>{
  return createHash('sha256').update(token).digest("hex");
} 

module.exports = {
  adiciona: async token => {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await manipulaBlockList.adiciona(tokenHash,'', dataExpiracao);
  },

  contemToken: async token => {
    const tokenHash = geraTokenHash(token);
    return manipulaBlockList.contemChave(tokenHash);
  },
};