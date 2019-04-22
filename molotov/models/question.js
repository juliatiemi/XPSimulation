var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    text: {type:String, require:true},
    user: {type:String, ref:'User', require:true},
    answers: [{type:Schema.Types.ObjectId, ref:'Answer', require:false}],
});

module.exports = mongoose.model('Question', schema)