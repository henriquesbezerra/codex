"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      this.hasMany(models.Matriculas, {
        foreignKey: "aluno_id",
      });
    }
  }
  Pessoas.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true, // habilita soft deletes
      modelName: "Pessoas",
      // Definicao de escopos, serve para modificar todas as selects feitas
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes:{
        todos: { where: {} }
        // etc: { where: {} }
      }
    }
  );
  return Pessoas;
};
