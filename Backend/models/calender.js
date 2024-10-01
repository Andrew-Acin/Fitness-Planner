'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calender.belongsTo(models.User, { foreignKey: 'created_by' });
    }
  }
  Calender.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id', 
      }
    },
  }, {
    sequelize,
    modelName: 'Calender',
    tableName: 'Calendar',
    timestamps: false
  });
  return Calender;
};