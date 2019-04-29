var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type:String, require:true},
    author: {type:String, ref:'users', require:true},
    answers: [{type:Schema.Types.ObjectId, ref:'answers', require:false}],
});

module.exports = mongoose.model('Question', schema)
