var express = require('express');
var router = express.Router();
var Question = require('../models/questions');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//findall
router.get('/author', function(req, res, next) {
  var id = req.params.authorID;
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
router.get('/author/:authorID', function(req, res, next) {
   var id = req.params.authorID;
   Question.find({ author: authorID })
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



router.post('/ask', function(req,res, next){
  addQuestionToDB(req, res);
});

async function addQuestionToDB(req, res){
  var question = new Question({
    text: req.body.question
  });
  try{
    doc = await question.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

module.exports = router;
