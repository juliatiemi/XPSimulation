var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    text: {type:String, require:true},
    user: {type:String, ref:'User', require:true},
    points: {type:Number, default: 0},
    tags: [{type:String, require:false}]
});

module.exports = mongoose.model('Question', schema)
