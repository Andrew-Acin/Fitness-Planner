'use strict';

const user = require('../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      muscle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      equipment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      difficulty: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Workouts');
  }
};