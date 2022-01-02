const postsDao = require('./posts-dao');
const validacoes = require('../validacoes-comuns');

class Post {
  constructor(post) {
    this.id = post.id;
    this.titulo = post.titulo;
    this.conteudo = post.conteudo;
    this.autor = post.autor;
    this.valida();
  }

  adiciona() {
    return postsDao.adiciona(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.titulo, 'título');
    validacoes.campoTamanhoMinimo(this.titulo, 'título', 5);

    validacoes.campoStringNaoNulo(this.conteudo, 'conteúdo');
    validacoes.campoTamanhoMaximo(this.conteudo, 'conteúdo', 140);
  }

  static deleta(id){
    postsDao.delete(id);
  }

  static async detalhes(id){
    const post = await postsDao.detalhes(id);
    if(!post){
      return null;
    }

    return new Post(post);
  }

  static async buscaPorId(id){
    const post = await postsDao.detalhes(id);

    if(!post){
      return null;
    }
    
    return new Post(post);
  }

  static async buscaPorIdAutor(id, autor){
    const post = await postsDao.buscaPorIdAutor(id, autor);

    if(!post){
      return null;
    }

    return new Post(post);
  }


  static lista() {
    return postsDao.lista();
  }
}

module.exports = Post;
