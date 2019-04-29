var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type:String, require:true},
    author: {type:String, ref:'User', require:true},
    question: {type: Schema.ObjectId, ref: 'Question', require:true}
});

module.exports = mongoose.model('Answer', schema)
