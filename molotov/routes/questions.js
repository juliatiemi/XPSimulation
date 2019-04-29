var express = require('express');
var router = express.Router();
var Question = require('../models/questions');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//findall
router.get('/user', function(req, res, next) {
  Question.find()
   .exec()
   .then(doc => {
     console.log(doc);
     res.status(200).json(doc);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json({ error:err })
   })
});

//find by authorID
router.get('/user/:userID', function(req, res, next) {
   var id = req.params.userID;
   console.log(id);
   Question.find({ user: id })
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error:err })
    });
});

//add new question
router.post('/ask', (req, res, next) => {
  var question = new Question({
    text: req.body.text,
    user: req.body.user,
    answers: req.body.answers
  });
 question.save()
  .then(result => {
    console.log(result);
  })
  .catch(err =>{
    console.log(err);
  });
  res.status(201).json({
    message: "Successful creation",
    createdQuestion: question
  })
});




module.exports = router;
