var express = require('express');
var router = express.Router();
var Answer = require('../models/answers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//findall
router.get('/answers', function(req, res, next) {
  Answer.find()
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



//find by question
router.get('/answers/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  Answer.find({ question: id })
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

//find by userID
router.get('/user/:userID', function(req, res, next) {
  var id = req.params.userID;
  Answer.find({ user : id })
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

//update voting
router.patch('/updateVote/:answerID', function(req, res, next) {
  var id = req.params.answerID;
  var newPoints = req.body.points;
  Answer.update({_id: id}, {$set: {points: newPoints}})
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
  var answer = new Answer({
    text: req.body.text,
    user: req.body.user,
    question: req.body.question
  });
 answer.save()
  .then(result => {
    console.log(result);
  })
  .catch(err =>{
    console.log(err);
  });
  res.status(201).json({
    message: "Successful creation",
    createdAnswer: answer
  })
});

//delete by question
router.delete('/answers/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  Answer.remove({ question: id })
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


//find by userID
router.delete('/user/:userID', function(req, res, next) {
  var id = req.params.userID;
  Answer.remove({ user : id })
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


module.exports = router;
