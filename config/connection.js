const Sequelize = require('sequelize');

require('dotenv').config();

// create connection
const sequelize = new Sequelize('blog', 'root', '0811', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;
