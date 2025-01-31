const {Sequelize} = require ('sequelize')


//create a new instance of sequelize
const sequelize = new Sequelize('festac05', 'root', 'root', {
    host: 'localHost',
    dialect: 'mysql'
  });

  module.exports = sequelize;