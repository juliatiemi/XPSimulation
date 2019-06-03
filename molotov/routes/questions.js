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

//find by questionid
router.get('/questions/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  console.log(id);
  console.log('inexplcavel')
  Question.find({ _id: id})
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
    title: req.body.title,
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

//update voting
router.patch('/updateVote/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  var newPoints = req.body.points;
  console.log(id);
  console.log(newPoints);
  Question.update({_id: id}, {$set: {points: newPoints}})
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

//update voting
router.patch('/questions/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  var title = req.body.title;
  var text = req.body.text;
  var tags = req.body.tags;
  console.log(id);
  console.log(text);
  console.log(title);
  Question.update({_id: id}, {$set: {title: title, text: text, tags: tags}})
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

//delete by questionid
router.delete('/questions/:questionID', function(req, res, next) {
  var id = req.params.questionID;
  console.log(id);
  Question.remove({ _id: id })
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

//delete by author ID
router.delete('/user/:userID', function(req, res, next) {
  var id = req.params.userID;
  Question.remove({ user: id })
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

//add tag
router.patch('/tags/:questionId/:tags', (req, res, next) => {
  const id = req.params.questionId;
  const tags = req.params.tags;
  var i;
  for (i in tags) {
    var tag = tags[i];
    console.log(tag)
    Question.update({_id: id}, {$push: {tags: tag}})
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
  }
});

module.exports = router;
