var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    text: {type:String, require:true},
    user: {type:String, ref:'User', require:true},
    question: {type: Schema.ObjectId, ref: 'Question', require:true},
    points: {type:Number, default: 0}
});

module.exports = mongoose.model('Answer', schema)
