var express = require('express');
var router = express.Router();
var Answer = require('../models/answers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//findall
router.get('/answers', function(req, res, next) {
  var id = req.params.questionID;
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
  Answer.find({ question: questionID })
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
router.get('/author/:authorID', function(req, res, next) {
  var id = req.params.authorID;
  Answer.find({ author: authorID })
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




router.post('/answer', function(req,res, next){
  addAnswerToDB(req, res);
});

async function addAnswerToDB(req, res){
  var answer = new Answer({
    text: req.body.new_answer
  });
  try{
    doc = await answer.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

module.exports = router;
