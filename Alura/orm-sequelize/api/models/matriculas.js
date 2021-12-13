'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Turmas, {
        foreignKey: 'turma_id'
      });
      this.belongsTo(models.Pessoas, {
        foreignKey: 'aluno_id'
      });
    }
  };
  Matriculas.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    /**
     * Paranoid possibilita o soft deletes
     * Reference: https://sequelize.org/master/manual/paranoid.html
     */
    paranoid: true,
    modelName: 'Matriculas',
  });
  return Matriculas;
};
