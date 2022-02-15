'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Users',
          key: 'id',
        }
      },
      published: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'published',
          defaultValue: new Date()
        },
        updated: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'updated',
          defaultValue: new Date()
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};