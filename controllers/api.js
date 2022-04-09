const express = require('express');
var router = express.Router();

///connect  api-routes
const userRoutes = require('./api/user');
const postRoutes = require('./api/post');
const commentRoutes = require('./api/comment');

//using routes 
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;