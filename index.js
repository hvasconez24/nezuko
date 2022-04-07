const express = require('express');
const path = require('path');
const expresshdlb = require('express-handlebars');
const session = require('express-session');
const sequelize = require("./connection/database");

const apiRoutes = require('./controllers/api');

const app = express();
const PORT = process.env.PORT || 3000;

const helpers = require('./assets/config_hdlb');

const hbs = expresshdlb.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api', apiRoutes);

app.listen(PORT, function () {
    console.log(`The application is running on port ${PORT}`);
    // if force: true = DROP TABLES (reset tables)
    sequelize.sync({force: false}).then(() =>{
        console.log('conexión con la bd establecida');
    });
});