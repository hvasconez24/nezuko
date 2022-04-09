/* this view defines the routes used in the dashboard:
get the user post, redirect to edit view*/ 

const router = require('express').Router();
const sequelize = require('../config/connection');

//import models
var Comment = require('../models/Comment');
var User = require('../models/User');
var Post = require('../models/Post');

const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
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
    .then(postDb => {
      const posts = postDb.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

//get one post by id, then send data to edit view
router.get('/edit/:id', withAuth, (req, res) => {
  var ID = req.params.id
  //console.log(ID);
  Post.findByPk(ID, {
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
    .then(postDb => {
      if (postDb) {
        const post = postDb.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
