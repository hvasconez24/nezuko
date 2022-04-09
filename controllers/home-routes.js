/*this file defines the routes used in the principal page:
show all the posts, redirect to edit, redirect to login/sign up view*/

const router = require('express').Router();
const sequelize = require('../config/connection');

//import models
var Comment = require('../models/Comment');
var User = require('../models/User');
var Post = require('../models/Post');

// get all posts for homepage
router.get('/', (req, res) => {
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
    .then(postDb => {
      const posts = postDb.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// get one post by id
router.get('/post/:id', (req, res) => {
  var ID = req.params.id;
  Post.findOne({
    where: {
      id: ID
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
      if (!postDb) {
        res.status(404).json({ message: 'No post found!' });
        return;
      }

      const post = postDb.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

//login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
