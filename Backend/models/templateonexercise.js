'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TemplateOnExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WorkoutOnExercise.belongsTo(models.Template, { foreignKey: 'template_id' });

      WorkoutOnExercise.belongsTo(models.Exercise, { foreignKey: 'exercise_id' });
    }
  }
  TemplateOnExercise.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    template_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'template', 
        key: 'id', 
      }
    },
    exercise_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'exercise', 
        key: 'id', 
      }
    }
  }, {
    sequelize,
    modelName: 'TemplateOnExercise',
    tableName: 'template_on_exercises',
    timestamps: false
  });
  return TemplateOnExercise;
};