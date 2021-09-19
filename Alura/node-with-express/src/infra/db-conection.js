/**
 * Importação do module de comunicação com o banco
 * de dados mysql
 */
const mysql = require('mysql');

/**
 * Criação e configuração da instância de
 * conexão com o banco de dados
 */
const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'agenda-api'
})

/** Exportamos a conexão para o uso em outro lugares */
module.exports = con;
