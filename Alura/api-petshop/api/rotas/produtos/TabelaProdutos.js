/**
 * DAO - Data Access Object
 */

const Modelo = require('./ModelProdutos');
const Instance = require('../../banco-de-dados');

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
      },
      raw: true
    })
  },

  remover(produto, fornecedor){
    return Modelo.destroy({
      where:{
        id: produto,
        fornecedor_id: fornecedor
      }
    });
  },

  /**
   * Esse método utilizada a transaction do sequilize para evitar
   * problema de concorrencia caso haja outras operacas de atualizacao ocorrendo ao mesmo tempo
   * @param {int} produto Id do produto
   * @param {int} fornecedor id do fornecedor
   * @param {string(SET|REMOVE)} type Tipo de operacao adiacao ou remocar
   * @param {int} qtd valor a ser calculado no estoque
   * @returns Model Produto
   */
  async atualizarEstoque(produto, fornecedor, type, qtd){

    const action = {
      "SET": (current, qtd)=>{
        return current + qtd;
      },
      "REMOVE": (current, qtd)=>{
        return current - qtd < 0 ? 0 : current - qtd;
      }
    };

    return await  Instance.transaction(async transaction => {
      const resultado = await Modelo.findOne({
        where: {
          id: produto,
          fornecedor_id: fornecedor
        }
      });

      const novoEstoque =  action[type](resultado['estoque'],qtd);
      resultado['estoque'] = novoEstoque;

      resultado.save();

      return resultado;
    });

  }

};
