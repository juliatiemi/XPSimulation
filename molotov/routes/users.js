var express = require('express');
var router = express.Router();
var User = require('../models/users');
var passport = require('passport');

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
    password: User.hashPassword(req.body.password),
    about: 'Hello World!'
  });
  try{
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

router.post('/login',  function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { res.status(501).json(err); }
      return res.status(200).json({message: 'Login success'});
    });
  })(req, res, next);
});

router.get('/user', isValidUser, function(req, res, next){
  return res.status(200).json(req.user);
});

router.get('/logout', isValidUser, function(req, res, next){
  req.logout();
  return res.status(200).json({message: 'Logout success'});
});


function isValidUser(req, res, next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message: 'Unauthorized Request'});
}

module.exports = router;
