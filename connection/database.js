const Sequelize = require('sequelize');

require('dotenv').config();

//parametros de conexión a la bd
const sequelize = new Sequelize(
  'tarea14', 
  'root', 
  '0811', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
);

module.exports = sequelize;