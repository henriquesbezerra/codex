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

      /**
       * Exemplo de escopo de associacao
       * a partir desses escopos de associao o sequelize
       * gera alguns métodos automáticos que podemos usar através de mixins
       * https://sequelize.org/master/manual/association-scopes.html
       */
      this.hasMany(models.Matriculas, {
        foreignKey: "aluno_id",
        scope: { status: 'ativo'},
        as: 'matriculasConfirmadas'
      });
    }
  }
  Pessoas.init(
    {

      name: {
       type: DataTypes.STRING,
       validate: {
         funcao_validadora: (dado) =>{
           if(dado.length < 3 ){
            throw new Error('Nome deve ter mais de 3 caracteres.');
           }
         }
       }
      },

      /**
      * Validação de campo pelo model
      * Reference: https://sequelize.org/master/manual/validations-and-constraints.html
      */
      email: {
        type: DataTypes.STRING,
        validate: {
          //isEmail: true // Forma básica
          isEmail: { // formato customizado
            args: true,
            msg: 'Email inválido'
          }
        }
      },

      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      /**
       * Paranoid possibilita o soft deletes
       * Reference: https://sequelize.org/master/manual/paranoid.html
       */
      paranoid: true,
      modelName: "Pessoas",
      /**
       * Definicao de escopos, serve para modificar todas as selects feitas
       * Reference: https://sequelize.org/master/manual/scopes.html
       */
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        todos: { where: {} }
        // etc: { where: {} }
      }
    }
  );
  return Pessoas;
};
