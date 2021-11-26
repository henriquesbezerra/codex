/**
 * DAO - Data Access Object
 */

const Modelo = require('./ModelProdutos');

module.exports = {

  listar(idFornecedor){
    return Modelo.findAll({
      where:{
        fornecedor_id: idFornecedor
      }
    });
  },

  inserir(produto){
    return Modelo.create(produto);
  }

};
