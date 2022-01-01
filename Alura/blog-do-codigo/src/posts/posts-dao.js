const db = require('../../database');

const { InternalServerError } = require('../erros');
const { promisify } = require('util');
const dbRun = promisify(db.run).bind(db);
const dbAll = promisify(db.all).bind(db);

module.exports = {

  async adiciona(post){
    try {
      await dbRun(
        `INSERT INTO posts (titulo, conteudo, autor ) VALUES (?, ?, ?)`,
        [post.titulo, post.conteudo, post.autor]
      );
    } catch (error) {
      throw new InternalServerError('Erro ao adicionar o post!');
    }
  },

  async lista(){
    try {
      return await dbAll(`SELECT * FROM posts`);
    } catch (error) {
      throw new InternalServerError('Erro ao listar os posts!');
    }
  },

  async delete(id){
    try {
      return await dbRun(`DELETE FROM posts WHERE id = ?`, [id]);
    } catch (error) {
      throw new InternalServerError('Erro ao deleter post!');
    }
  }
};
