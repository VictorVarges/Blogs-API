'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Logins',
      [{
        id: 1,
        email: 'lewishamilton@gmail.com',
        password: '123456',
      }
      ], { timestamps: false });
  },
    down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Logins', null, {});
  }
}
