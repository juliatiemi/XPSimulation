var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
      var tag_list = tags_text.split(',');
      if(tags_text == ""){
        return question_list;
      }
      var aux = [];
      var j;
      var i;
      var l;
      for(j in question_list){
        if(question_list[j].tags){
          for(i in question_list[j].tags){
              for(l in tag_list){
                  if(tag_list[l] == question_list[j].tags[i]){
                    aux.push(question_list[j]);
                    break;
                  }
              }
          }
        }
      question_list = aux;
    }
    return question_list;
  }

  schema.methods.addTag = function addTag(tag) {
    this.tags.push(tag);
  }

module.exports = mongoose.model('Question', schema)
