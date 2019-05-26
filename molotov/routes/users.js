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
      return res.status(200).json(user);
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

router.get('/users/:userId', (req, res, next) => {
    console.log('opa');
    var id = req.params.userId;
    console.log(id)
    User.find({_id: id})
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error:err })
      });

});

router.delete('/:userId', isValidUser, (req, res, next) => {
  const id = req.params.userId;
  User.remove({_id: id})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      });
    });
});

router.patch('/desc/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.update({_id: id}, {$set: {about: req.body.about}})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      });
    });
});

router.patch('/pass/:userId', (req, res, next) => {
  const id = req.params.userId;
  var pass = User.hashPassword(req.body.password);
  User.update({_id: id}, {$set: {password: pass}})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      });
    });
});


function isValidUser(req, res, next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message: 'Unauthorized Request'});
}

module.exports = router;
