import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import Axios from 'axios';

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
    let newAnswer = {
      body: this.newAnswerBody,
      author: "get author"
    };
    this.answers.push(newAnswer);
    this.answer = false;
  }

  constructor(private route: ActivatedRoute) { }

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
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.status)
          console.log(error.response.data)
        }
      })

  }

}
