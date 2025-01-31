const {Sequelize,DataTypes,Model} = require('sequelize')
const {sequelize} = require('../database/sequelize')

  class User extends Model {

  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },

  },
   {
    sequelize,
    modelName: 'User',
    tableName:'Users'
  }
);
 

module.exports = User