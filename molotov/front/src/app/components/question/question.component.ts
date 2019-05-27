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
  addQuestionButtonClicked = false;
  subQuestionButtonClicked = false;
  showAnswer = true;
  newAnswerBody;
  questionId;

  upvoteQuestion(question) {
    if(this.subQuestionButtonClicked == true) {
      return;
    }

    if(this.addQuestionButtonClicked == true) {
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { points: question.points })
        .then((resp) => {
          this.addQuestionButtonClicked = false;
          question.points--;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { points: question.points })
        .then((resp) => {
          this.addQuestionButtonClicked = true;
          question.points++;
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
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { points: question.points })
        .then((resp) => {
          this.subQuestionButtonClicked = false;
          question.points++;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      Axios.patch(baseurl + 'questions/updateVote/' + question._id, { points: question.points })
        .then((resp) => {
          this.subQuestionButtonClicked = true;
          question.points--;
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
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { points: answer.points })
        .then((resp) => {
          answer.addAnswerButtonClicked = false;
          answer.points--;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { points: answer.points })
        .then((resp) => {
          answer.addAnswerButtonClicked = true;
          answer.points++;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    //axios upvote question by id
  }

  downvoteAnswer(answer) {
    if(answer.addAnswerButtonClicked == true) {
      return;
    }
    if(answer.subAnswerButtonClicked == true) {
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { points: answer.points })
        .then((resp) => {
          answer.subAnswerButtonClicked = false;
          answer.points++;
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      Axios.patch(baseurl + 'answers/updateVote/' + answer._id, { points: answer.points })
        .then((resp) => {
          answer.subAnswerButtonClicked = true;
          answer.points--;
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
      question: this.questionId
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

  constructor(private route: ActivatedRoute,
    public settings: AppSettingsService) { }

  //get answers
  ngOnInit() {
    this.addQuestionButtonClicked = false;
    this.subQuestionButtonClicked = false;
    this.answer = false;
    this.questionId = this.route.snapshot.paramMap.get("id");
    
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

  this.question = {text: "lalalala pergunta| ", user: "tiemi ", points: 221}
  this.answers = [{user: "julia", text: "resposoasjdoaijs", points: 12},{user: "julasia", text: "resposo asjdoa asasaijs", points: 2}]
  }

}
