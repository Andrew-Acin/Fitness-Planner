'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutOnExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WorkoutOnExercise.belongsTo(models.Workout, { foreignKey: 'workout_id' });
      
      WorkoutOnExercise.belongsTo(models.Exercise, { foreignKey: 'exercise_id' });
    }
  }
  WorkoutOnExercise.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'workout', // Name of the referenced model (workout)
        key: 'id', // Key in the referenced model
      }
    },
    exercise_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'exercise', // Name of the referenced model (exercise)
        key: 'id', // Key in the referenced model
      }
    }
  }, {
    sequelize,
    modelName: 'WorkoutOnExercise',
    tableName: 'workout_on_exercise',
    timestamps: false
  });
  return WorkoutOnExercise;
};