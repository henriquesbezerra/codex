const db = require('../../database');
const { InternalServerError } = require('../erros');

/* 
  Promissificando a comunicacao com o banco de dados
  para melhorar possibilitando o uso de async await
  facilitando o uso de promisses
*/
const { promisify } = require('util');
const dbRun = promisify(db.run).bind(db);
const dbGet = promisify(db.get).bind(db);
const dbAll = promisify(db.all).bind(db);

module.exports = {
  /**
   * Adiciona - Método sem utilizar promisify
   * @param {*} usuario 
   * @returns 
   */
  adiciona: usuario => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          INSERT INTO usuarios (
            nome,
            email,
            senhaHash,
            emailVerificado
          ) VALUES (?, ?, ?, ?)
        `,
        [usuario.nome, usuario.email, usuario.senhaHash, usuario.emailVerificado],
        erro => {
          if (erro) {
            reject(new InternalServerError('Erro ao adicionar o usuário!'));
          }

          return resolve();
        }
      );
    });
  },

  /**
   * Novo método adiciona utilizando promisify
   */
  async adiciona2(usuario){
    try {
      await dbRun(
        `INSERT INTO usuarios (nome, email, senhaHash, emailVerificado) VALUES (?, ?, ?, ?)`,
        [usuario.nome, usuario.email, usuario.senhaHash, usuario.emailVerificado]
      );
    } catch (error) {
      throw new InternalServerError('Erro ao adicionar o usuário!');
    }
  },

  async modificaEmailVerificado(usuarioId, emailVerificado){
    try {
      await dbRun(
        `UPDATE usuarios  SET emailVerificado = ? WHERE id = ?`,
        [emailVerificado, usuarioId]
      );
    } catch (error) {
      throw new InternalServerError('Erro ao verificar email do usuário!');
    }
  },

  async buscaPorId(id){
    try {
      return await dbGet(
        `SELECT * FROM usuarios WHERE id = ?`,
        [id]
      );
    } catch (error) {
      throw new InternalServerError('Não foi possível encontrar o usuário!');
    }
  },

  async buscaPorEmail(email){
    try {
      return await dbGet(
        `SELECT * FROM usuarios WHERE email = ?`,
        [email]
      );
    } catch (error) {
      throw new InternalServerError('Não foi possível encontrar o usuário!');
    }
  },

  async lista(){
    try {
      return await dbAll(`SELECT * FROM usuarios`);
    } catch (error) {
      throw new InternalServerError('Erro ao listar usuários');
    }
  },

  async deleta(usuario){
    try {
      await dbGet(
        `DELETE FROM usuarios WHERE id = ?`,
        [usuario.id]
      );
    } catch (error) {
      throw new InternalServerError('Erro ao deletar o usuário');
    }
  },
};
