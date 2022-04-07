const express = require('express');
var router = express.Router();

var User = require('../../models/User');
var Post = require('../../models/Post');
var Comment = require('../../models/Comment');

    //get all posts
    router.get('/', (req, res) => {
        console.log('======================');
        Post.findAll({
          attributes: [
            'id',
            'post_text',
            'title',
            'created_at'
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
        })
          .then(postDb => res.json(postDb))
          .catch(error => {
            console.log(error);
            res.status(500).json(error);
          });
      });

module.exports = router;