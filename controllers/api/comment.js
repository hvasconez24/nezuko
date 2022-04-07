const express = require('express');
var router = express.Router();

var User = require('../../models/User');
var Post = require('../../models/Post');
var Comment = require('../../models/Comment');

    //get all comments
    router.get('/', (req, res) => {
        Comment.findAll()
          .then(commentDb => res.json(commentDb))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
    });

module.exports = router;