const Sequelize = require('sequelize');

require('dotenv').config();

// create connection
const sequelize = new Sequelize('heroku_95115ad6de88dcd', 'b313796f5e26a2', 'c4def49e', {
  host: 'us-cdbr-east-05.cleardb.net',
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;
