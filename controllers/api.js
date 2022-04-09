const express = require('express');
var router = express.Router();

const userRoutes = require('./api/user');
const postRoutes = require('./api/post');
const commentRoutes = require('./api/comment');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;