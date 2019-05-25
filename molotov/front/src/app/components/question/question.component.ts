import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import Axios from 'axios';
import { AppSettingsService } from 'src/app/app-settings.service';

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
  showAnswer = true;
  newAnswerBody;
  questionId;

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
    console.log(this.questionId)
    let newAnswer = {
      text: this.newAnswerBody,
      user: JSON.parse(localStorage.getItem(this.settings.LOCALSTORAGE_USERDATA)).username,  // <<<< ======= substituir aqui o id de quem ta perguntando **usuario da sessão
      question: this.questionId
    };
    console.log(newAnswer)
    this.answers.push(newAnswer);
    this.answer = false;
    Axios.post(baseurl + 'answers/ask', {headers : headers})
      .then((resp)=> {
          console.log('aqui')
          console.log(resp)
        })
      .catch((error) => {
          console.log(error)
      })
  }

  constructor(private route: ActivatedRoute,
    public settings: AppSettingsService) { }

  //get answers
  ngOnInit() {
    this.answer = false;
    this.questionId = this.route.snapshot.paramMap.get("id");
    console.log(this.questionId)
    Axios.get(baseurl + 'questions/questions/' + this.questionId, {headers: headers})
      .then((resp) => {
          this.question = resp.data[0];
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
          console.log(error.response.status)
          console.log(error.response.data)
        }
      })
  }
}
