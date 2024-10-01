'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate(models) {
      Exercise.belongsToMany(models.Workout, {
        through: 'WorkoutExercises',
        foreignKey: 'exerciseId',
        otherKey: 'workoutId'
      });
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
    modelName: 'Exercise', 
    tableName: 'Exercises', 
    timestamps: false
  });
  return Exercise;
};
