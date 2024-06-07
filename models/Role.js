const { Model, DataTypes } = require('sequelize');
const sequelize = require('../models/index');

class Role extends Model { }

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Role',
  }
);

module.exports = Role;
