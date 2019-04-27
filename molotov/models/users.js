var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    _id: {type:String, require:true},
    password: {type:String, require:true},
    about: {type:String, require:false},
    questions: [{type:Schema.ObjectId, ref:'questions', require:false}],
    answers: [{type:Schema.ObjectId, ref:'answers', require:false}],
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password, 10);
}

schema.methods.isValid = function isValid(hashedPassword){
    return bcrypt.compareSync(hashedPassword, this.password);
}


module.exports = mongoose.model('User', schema)