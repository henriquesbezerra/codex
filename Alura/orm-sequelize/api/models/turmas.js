'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
const pessoas = require('../models/pessoas');
const matriculas = require('./matriculas');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(matriculas, {
        foreignKey: 'turma_id'
      });
      this.belongsTo(pessoas,{
        foreignKey: 'docente_id'
      });
    }
  };
  Turmas.init({
    data_inicio: DataTypes.DATEONLY,
    nivel: DataTypes.STRING,
    descricao: DataTypes.STRING,
    docente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: require('../models/pessoas'),
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
