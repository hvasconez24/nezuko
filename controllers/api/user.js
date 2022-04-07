const express = require('express');
var router = express.Router();

var User = require('../../models/User');
var Post = require('../../models/Post');
var Comment = require('../../models/Comment');
const res = require('express/lib/response');

//comando de prueba
router.get('/', (req,res)=>{
    res.send("ruta users funciona");
});
    // Get all users
    // router.get('/', (req, res) => {
    // User.findAll({
    //     attributes: { exclude: ['password'] }
    // })
    //     .then(userDb => res.json(userDb))
    //     .catch(error => {
    //     console.log(error);
    //     res.status(500).json(error);
    //     });
    // });


module.exports = router;