'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      // Define association to User model
      Workout.belongsTo(models.User, { foreignKey: 'created_by' });

      Workout.belongsToMany(models.Exercise, {
        through: 'WorkoutExercises', // This table will store workout-exercise relations
        foreignKey: 'workoutId',
        otherKey: 'exerciseId'
    });
    }
  }

  Workout.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Name of the referenced model (users)
        key: 'id', // Key in the referenced model
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    muscle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'Workouts',
    timestamps: false
  });

  return Workout;
};
