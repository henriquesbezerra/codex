const TabelaProduto = require('./TabelaProdutos');

// Importamos classe de erro NotFound
const ResponseErrors = require('../../errors/ResponseErrors');

class Produto{

  constructor({
    id,
    titulo,
    preco,
    estoque,
    fornecedor_id,
    createdAt,
    updatedAt
  }){
    this.id = id;
    this.titulo = titulo;
    this.preco = preco;
    this.estoque = estoque;
    this.fornecedor_id = fornecedor_id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async criar(){
    this.validar();
    const resultado = await TabelaProduto.inserir({
      titulo: this.titulo,
      preco: this.preco,
      estoque: this.estoque,
      fornecedor_id: this.fornecedor_id
    });

    this.id = resultado.id  || 0;
    this.createdAt = resultado.createdAt  || 0;
    this.updatedAt = resultado.updatedAt  || 0;

    return resultado;

  }

  async apagar(){
    await TabelaProduto.remover(this.id, this.fornecedor_id);
  }

  validar(){
    if(typeof this.titulo !== 'string' || this.titulo.length <= 0){
      throw new ResponseErrors(406, `O título do produto não foi preenchido corretamente!`);
    }

    if(typeof this.preco !== 'number' || this.preco <= 0){
      throw new ResponseErrors(406, `O preço do produto não foi preenchido corretamente!`);
    }

    if(typeof this.estoque !== 'number' || this.preco < 0){
      throw new ResponseErrors(406, `O estoque do produto não foi preenchido corretamente!`);
    }

    if(typeof this.fornecedor_id !== 'number' || this.fornecedor_id == 0){
      throw new ResponseErrors(406, `O fornecedor do produto não foi preenchido corretamente!`);
    }


  }
}

module.exports = Produto;
