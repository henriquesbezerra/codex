const Sequelize = require('sequelize');

// Importamos a instancia de conexao o banco
const instancia = require('../../banco-de-dados');

const table_produtos = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  estoque:{
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  fornecedor_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('../fornecedores/ModelFornecedores'),
      key: 'id'
    }
  }
}

module.exports = instancia.define('produto', table_produtos, {
  freezeTableName: true,
  tableName: 'produtos',
  timestamps: true
});
