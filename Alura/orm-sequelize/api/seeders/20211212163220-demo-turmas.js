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
    await queryInterface.bulkInsert('turmas', [
      {
        docente_id: 1,
        nivel: 'basic',
        descricao: 'Turma 007 - Espionagem básica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        docente_id: 1,
        nivel: 'intermediate',
        descricao: 'Turma 007.2 - Espionagem Intermediária',
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
     await queryInterface.bulkDelete('turmas', null, {});
  }
};
