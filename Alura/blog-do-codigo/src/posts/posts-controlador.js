const Post = require('./posts-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    try {
      req.body.autor = req.user.id;
      const post = new Post(req.body);
      await post.adiciona();
      
      res.status(201).send(post);
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  lista: async (req, res) => {
    try {
      let posts = await Post.lista();

      if(!req.estaAutenticado){
        posts = posts.map(post => ({ titulo: post.titulo, conteudo: post.conteudo }));
      }

      res.send(posts);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },

  deleta: async (req, res) => {
    try {
      const { id } = req.params;
      await Post.deleta(id);
      res.status(204).json();
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },

  remover: async (req, res) => {
    try {
      let post;
      
      if(req.acesso.todos.permitido){
        post = await Post.buscaPorId(req.params.id);
      }else if(req.acesso.apenasSeu.permitido){
        post = await Post.buscaPorIdAutor(req.params.id, req.user.id);
      }
      
      await Post.deleta(post.id);
            
      res.status(204).json();
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }

  },

  detalhes: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.detalhes(id);
      res.status(200).json(post);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  }
};
