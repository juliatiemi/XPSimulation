var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Axios = require('axios')


var schema = new Schema({
    title: {type:String, require:true},
    text: {type:String, require:true},
    user: {type:String, ref:'User', require:true},
    points: {type:Number, default: 0},
    tags: [{type:String, require:false}]
});

schema.methods.splitTags = function splitTags(text){
    var tags = text.replace(/\s/g, '');
    var taglist = tags.split(',');
    return taglist;
}

schema.methods.filterTags = function filterTags(text){
    var tags = text.replace(/\s/g, '');
    var taglist = tags.split(',');
    return taglist;
}

schema.methods.getAllQuestions = function getAllQuestions(baseurl) {
    Axios.get(baseurl + 'questions/user/', {headers:headers})
    .then((resp) => {
        if(resp.status === 200){
          console.log(this.questions);
          return resp.data;
        }
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)
      }
    })
  }

  schema.methods.filterTags = function filterTags(tags_text, question_list) {
    if (tags_text == ""){
      return question_list;
    }
    var clear_tags = tags_text.replace(/\s/g, '');
    var tag_list = clear_tags.split(',');
    var i, j;
    var quest;
    var tag;
    var remove;
    for (i in question_list){
      quest = question_list[i];
      remove = true;
      for (j in tag_list){
        tag = tag_list[j];
        if (quest.tags.includes(tag)){
          remove = false;
          break;
        }
      }
      if (remove){
        return question_list.splice(i, 1)
      }
    }
  }

  schema.methods.addTag = function addTag(tag) {
    this.tags.push(tag);
  }


module.exports = mongoose.model('Question', schema)
