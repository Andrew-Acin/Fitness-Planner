'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      muscle: {
        type: Sequelize.STRING
      },
      equipment: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workouts');
  }
};