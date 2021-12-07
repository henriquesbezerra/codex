'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('pessoas', [
      {
        name: 'John Doe',
        email: 'john.doe@mail.com',
        ativo: true,
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fulano de Tal',
        email: 'fulano.de.tal@mail.com',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cliclano Beltrano',
        email: 'ciclano.trano@mail.com',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
