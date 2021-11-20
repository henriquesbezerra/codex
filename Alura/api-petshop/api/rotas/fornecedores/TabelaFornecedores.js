const ModelFornecedores = require('./ModelFornecedores');
const ResponseErrors = require('../../errors/ResponseErrors');

module.exports ={
  listar(){
    return ModelFornecedores.findAll();
  },

  inserir(fornecedor){
    return ModelFornecedores.create(fornecedor);
  },

  async buscarPorId(id){
    const result = await ModelFornecedores.findOne({
      where:{
        id: id
      }
    });

    if(!result){
      throw new ResponseErrors(404, 'Fornecedor não encontrado');
    }

    return result;
  },

  async update(id, data){
    return ModelFornecedores.update(data,{
      where:{
        id: id
      }
    })
  },

  async remover(id){
    return ModelFornecedores.destroy({
      where:{
        id: id
      }
    })
  }
}
