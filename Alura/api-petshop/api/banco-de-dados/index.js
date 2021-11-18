// Carrega as variáveis de ambiente
require('dotenv/config');

// Importação do módulo Sequelize
const Sequelize = require('sequelize');

// Criamos uma instância do módulo sequelize para criar a conexão com nosso banco de dados
const sequelize_instance_connection = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PWD,
  {
    host: process.env.BD_HOST,
    dialect: `mysql`
  }
);

module.exports = sequelize_instance_connection;
