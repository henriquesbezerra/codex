const redis = require('redis');
const manipulaLista = require('./manipula-lista');

const resetPass = redis.createClient({
  prefix: 'resetPass-token:'
});

module.exports = manipulaLista(resetPass);

