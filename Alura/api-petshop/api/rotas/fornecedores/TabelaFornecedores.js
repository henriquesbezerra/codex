const ModelFornecedores = require('./ModelFornecedores');

module.exports ={
  listar(){
    return ModelFornecedores.findAll();
  }
}
