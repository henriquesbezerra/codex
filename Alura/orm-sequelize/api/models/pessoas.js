'use strict';
const {
  Model
} = require('sequelize');
const matriculas = require('./matriculas');
const turmas = require('./turmas');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(turmas,{
        foreignKey: 'docente_id'
      });
      this.hasMany(matriculas, {
        foreignKey: 'aluno_id'
      });
    }
  };
  Pessoas.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};
