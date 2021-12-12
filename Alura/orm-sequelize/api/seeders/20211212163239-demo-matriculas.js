'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('matriculas', [
      {
        turma_id: 1,
        aluno_id: 2,
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        turma_id: 2,
        aluno_id: 2,
        status: "ativo",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('matriculas', null, {});
  }
};
