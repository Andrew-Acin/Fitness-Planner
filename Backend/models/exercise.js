'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate(models) {
      // Define association here if needed
    }
  }
  Exercise.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Exercise', // This should match your references
    tableName: 'Exercises', // Ensure this matches the migration
    timestamps: false
  });
  return Exercise;
};
