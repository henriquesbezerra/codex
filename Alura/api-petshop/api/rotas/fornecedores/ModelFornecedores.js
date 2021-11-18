// Importação módulo sequile
const Sequelize = require('sequelize');

// Importamos a instancia de conexao o banco
const instancia = require('../../banco-de-dados');

const table_fornecedores = {
  empresa:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria:{
    type: Sequelize.ENUM('ração','brinquedos'),
    allowNull: false
  }
}

module.exports = instancia.define('fornecedor', table_fornecedores, {
  freezeTableName: true,
  tableName: 'fornecedores',
  timestamps: true
});
