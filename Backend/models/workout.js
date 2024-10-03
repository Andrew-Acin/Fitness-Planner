'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    static associate(models) {
      // Define association to User model
      Workout.belongsTo(models.User, { foreignKey: 'created_by' });
    }
  }

  Workout.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout_name: {
      type:DataTypes.STRING
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Name of the referenced model (users)
        key: 'id', // Key in the referenced model
      }
    }, 
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'Workouts',
    timestamps: false
  });

  return Workout;
};
