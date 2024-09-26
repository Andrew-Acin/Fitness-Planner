'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Template.belongsTo(models.User, { foreignKey: 'created_by' });
    }
  }
  Template.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type:DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'Template',
    tableName: 'template',
    timestamps: false
  });
  return Template;
};