const { promisify } = require('util');

module.exports = lista =>{

  /**
   * Funções do cliente Redis funciona da forma assíncrona,
   * a api do node não suporta promisses, por isso para utilizar
   * funcoes que esperam  receber uma função de callback, vamos usar a funcao promisify
   * do módulo util, nativo do nodejs.
   */

  const setAsync =  promisify(lista.set).bind(lista);
  const existsAsync =  promisify(lista.exists).bind(lista);
  const getAsync = promisify(lista.get).bind(lista);
  const delAsync = promisify(lista.del).bind(lista);

  return{
    async adiciona(chave, valor, dataExpiracao){
      await setAsync(chave, valor);
      lista.expireat(chave, dataExpiracao);
    },

    async buscaValor(chave){
      return getAsync(chave);
    },

    async contemChave(chave){
      const result = await existsAsync(chave);
      return result === 1;
    },

    async deleta(chave){
      await delAsync(chave);
    }
  };
}