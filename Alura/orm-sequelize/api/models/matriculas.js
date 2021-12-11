'use strict';
const {
  Model
} = require('sequelize');
const turmas = require('../models/turmas');
const pessoas = require('./pessoas');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(turmas, {
        foreignKey: 'turma_id'
      });
      this.belongsTo(pessoas, {
        foreignKey: 'aluno_id'
      });
    }
  };
  Matriculas.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};
