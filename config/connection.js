const Sequelize = require('sequelize');

require('dotenv').config();

// create connection

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

// bdName: heroku_95115ad6de88dcd
// host: us-cdbr-east-05.cleardb.net
// user: b313796f5e26a2
// pass: c4def49e


// CLEARDB_DATABASE_URL: mysql://b313796f5e26a2:c4def49e@us-cdbr-east-05.cleardb.net/heroku_95115ad6de88dcd?reconnect=true

const sequelize = new Sequelize(
  'heroku_95115ad6de88dcd', 
  'b313796f5e26a2', 
  'c4def49e', {
  host: 'us-cdbr-east-05.cleardb.net',
  dialect: 'mysql'
});


module.exports = sequelize;
