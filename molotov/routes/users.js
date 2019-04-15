var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function(req,res, next){
  addUserToDB(req, res);
});

async function addUserToDB(req, res){
  var user = new User({
    _id: req.body.username,
    password: User.hashPassword(req.body.password)
  });
  try{
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

module.exports = router;
