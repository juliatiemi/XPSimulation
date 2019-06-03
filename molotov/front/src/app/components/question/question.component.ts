import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import Axios from 'axios';
import { AppSettingsService } from 'src/app/app-settings.service';
import { BaseRowDef } from '@angular/cdk/table';
import {Router} from "@angular/router";

 const baseurl = 'http://localhost:3000/'
 const headers = {
  'Content-Type' : 'application/json',
  'Access-Control-Allow-Origin': '*'
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question = {};
  answers = [];
  answer = false;
  addQuestionButtonClicked = false;
  subQuestionButtonClicked = false;
  owner = false;
  showAnswer = true;
  newAnswerBody;
  questionId;
  editing = false;
  editedquestion = {}
  editedquestiontext;
  editedquestiontitle;
  tags;
  editedquestiontags;

  upvoteQuestion(question) {
    if(this.subQuestionButtonClicked == true) {
      return;
    }

    if(this.addQuestionButtonClicked == true) {
      question.points--;
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { headers: headers, points: question.points })
        .then((resp) => {
          console.log(resp)
          this.addQuestionButtonClicked = false;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      question.points++;
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { headers: headers, points: question.points })
        .then((resp) => {
          console.log(resp)
          this.addQuestionButtonClicked = true;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  downvoteQuestion(question) {
    if(this.addQuestionButtonClicked == true) {
      return;
    }
    if(this.subQuestionButtonClicked == true) {
      question.points++;
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { headers: headers, points: question.points })
        .then((resp) => {
          this.subQuestionButtonClicked = false;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      question.points--;
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { headers: headers, points: question.points })
        .then((resp) => {
          this.subQuestionButtonClicked = true;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  
  upvoteAnswer(answer) {
    if(answer.subAnswerButtonClicked == true) {
      return;
    }
    if(answer.addAnswerButtonClicked == true) {
      answer.points--;
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { headers: headers, points: answer.points })
        .then((resp) => {
          console.log(resp);
          answer.addAnswerButtonClicked = false;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      answer.points++;
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { headers: headers, points: answer.points })
        .then((resp) => {
          answer.addAnswerButtonClicked = true;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    //axios upvote question by id
  }
  submiteditquestion(question){
    console.log(this.editedquestiontags);
    var arraytag = this.editedquestiontags.split(" ");
    console.log(arraytag);
    Axios.patch(baseurl + 'questions/questions/' + question._id, {headers: headers, title: this.editedquestiontitle, text: this.editedquestiontext, tags: arraytag})
      .then((resp) => {
        console.log(resp);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })

  }

  downvoteAnswer(answer) {
    if(answer.addAnswerButtonClicked == true) {
      return;
    }
    if(answer.subAnswerButtonClicked == true) {
      answer.points++;
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { headers: headers, points: answer.points })
        .then((resp) => {
          answer.subAnswerButtonClicked = false;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      answer.points--;
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { headers: headers, points: answer.points })
        .then((resp) => {
          answer.subAnswerButtonClicked = true;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    //axios downvote question by id
  }

  answerQuestion() {
    this.answer  = true;
  }

  cancel() {
    this.answer = false;
  }

  //to do
  //send to api
  submit() {
    this.questionId = this.route.snapshot.paramMap.get("id");
    let newAnswer = {
      text: this.newAnswerBody,
      user: localStorage.getItem('username'),  // <<<< ======= substituir aqui o id de quem ta perguntando **usuario da sessão
      question: this.questionId,
      points: 0
    };
    this.answers.push(newAnswer);
    this.answer = false;
    Axios.post(baseurl + 'answers/ask', newAnswer ,{headers : headers})
      .then((resp)=> {
          console.log('aqui')
          console.log(resp)
        })
      .catch((error) => {
          console.log(error)
      })
  }
  editquestion(){
    this.editing = true;
  }

  canceleditquestion(){
      this.editing = false;
  }


  selecttag(tag){
    localStorage.setItem('tag', tag);
    console.log(tag);
    this.router.navigateByUrl('/questions');
  }


  constructor(private route: ActivatedRoute,
    private router: Router,
    public settings: AppSettingsService) { }

  //get answers
  ngOnInit() {
    localStorage.setItem('tag', "");
    this.addQuestionButtonClicked = false;
    this.subQuestionButtonClicked = false;
    this.answer = false;
    this.questionId = this.route.snapshot.paramMap.get("id");
    
    Axios.get(baseurl + 'questions/questions/' + this.questionId, {headers: headers})
      .then((resp) => {
          this.question = resp.data[0];
          if(localStorage.getItem('username') === resp.data[0].user){   
            console.log("Você que é o dono");
            this.owner = true;
          }
          console.log(resp.data[0]);
          this.tags = resp.data[0].tags;
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.status)
          console.log(error.response.data)
         
        }
      })
      Axios.get(baseurl + 'answers/answers/' + this.questionId, {headers: headers})
      .then((resp) => {
          this.answers = resp.data;
          console.log(resp)
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
        }
      })
  }
  
}
