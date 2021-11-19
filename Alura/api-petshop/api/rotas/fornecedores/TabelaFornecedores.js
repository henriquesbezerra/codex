const ModelFornecedores = require('./ModelFornecedores');

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
      throw new Error('Fornecedor não encontrado');
    }

    return result;
  },

  async update(id, data){
    return ModelFornecedores.update(data,{
      where:{
        id: id
      }
    })
  }
}
