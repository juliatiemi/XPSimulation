var express = require('express');
var router = express.Router();
var Answer = require('../models/answers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

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
