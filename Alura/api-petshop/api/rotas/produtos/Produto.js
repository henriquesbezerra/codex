const TabelaProduto = require('./TabelaProdutos');

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
}

module.exports = Produto;
