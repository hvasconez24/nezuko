const router = require('express').Router();

//import all 'route' files
const apiR = require('./api/');
const homeR = require('./home-routes.js');
const dashboardR = require('./dashboard-routes.js');

//assign paths for each file*/
router.use('/', homeR);
router.use('/dashboard', dashboardR);
router.use('/api', apiR);

module.exports = router;
