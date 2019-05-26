var mongoose = require('mongoose');
var assert = require('chai').assert;
var User = require('../models/users');
var Question = require('../models/questions');
var Answer = require('../models/answers');

describe('Hash Password', function(){
    it('password encryption should work', function(){
        var password = 'senha123';
        var encrypted_password = User.hashPassword(password);
        var user = User()
        user.password = encrypted_password
        assert.isOk(user.isValid(password))
    });
});

describe('Questions Model', function(){
    it('question schema must be working', function(){
        var test = {
            text: "really?",
            user: "george",
            points: 3
        };
        var question = Question(test);
        assert.equal("really?", question.text)
    });
});

describe('Answers Model', function(){
    it('answers schema must be working', function(){
        var test = {
            text: "Yes.",
            user: "george",
            question: mongoose.Types.ObjectId("5cc31e841c9d440000152197"),
            points: 2
        };
        var answer = Answer(test);
        assert.equal("george", answer.user)
    });
});