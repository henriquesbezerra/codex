const TabelaFornecedor = require('./TabelaFornecedores');

// Importamos classe de erro NotFound
const ResponseErrors = require('../../errors/ResponseErrors');

class Fornecedor{

  constructor({
    id,
    empresa,
    email,
    categoria,
    createdAt,
    updatedAt,
    versao
  }){
    this.id = id;
    this.empresa = empresa;
    this.email = email;
    this.categoria = categoria;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.versao = versao;
  }

  async criar (){
    this.validar();
    const resultado = await TabelaFornecedor.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria
    });

    this.id = resultado.id  || 0;
    this.createdAt = resultado.createdAt  || 0,
    this.updatedAt = resultado.updatedAt  || 0,
    this.versao = resultado.versao || 0;

    return resultado;
  }

  async buscar(){
    const resultado = await TabelaFornecedor.buscarPorId(this.id);

    this.id = resultado.id;
    this.empresa = resultado.empresa;
    this.email = resultado.email;
    this.categoria = resultado.categoria;
    this.createdAt = resultado.createdAt;
    this.updatedAt = resultado.updatedAt;

  }

  async atualizar(){

    await TabelaFornecedor.buscarPorId(this.id);
    const campos = ['empresa','email','categoria'];
    const newData = {};

    campos.forEach(campo => {
      if(typeof this[campo] === 'string' && this[campo].length > 0){
        newData[campo] = this[campo];
      }
    });
    if(Object.keys(newData).length === 0){
      throw new ResponseErrors(406, 'Sem dados para atualizar');
    }

    await TabelaFornecedor.update(this.id, newData);

  }

  async apagar(){
    const result = await TabelaFornecedor.buscarPorId(this.id);

    if(!result){
      throw new Error('Fornecedor não encontrado');
    }

    await TabelaFornecedor.remover(this.id);
  }

  validar(){
    const campos = ['empresa','email','categoria'];
    campos.forEach(campo => {
      if(typeof this[campo] !== 'string' || this[campo].length <= 0){
        throw new ResponseErrors(406, `O campo: ${campo}, não foi preenchido corretamente!`);
      }
    });
  }
}

module.exports = Fornecedor;
