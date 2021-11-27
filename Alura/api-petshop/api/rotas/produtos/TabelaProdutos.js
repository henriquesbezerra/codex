/**
 * DAO - Data Access Object
 */

const Modelo = require('./ModelProdutos');

const ResponseErrors = require('../../errors/ResponseErrors');

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
  },

  async buscarPorId(id){
    const result = await Modelo.findOne({
      where:{
        id: id
      }
    });

    if(!result){
      throw new ResponseErrors(404, 'Produto não encontrado');
    }

    return result;
  },

  async update(idProduto, idFornecedor, data){
    return Modelo.update(data,{
      where:{
        id: idProduto,
        fornecedor_id: idFornecedor
      }
    })
  },

  remover(produto, fornecedor){
    return Modelo.destroy({
      where:{
        id: produto,
        fornecedor_id: fornecedor
      }
    });
  }

};
