import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import {Router} from "@angular/router";
import Axios from 'axios';
import { AppSettingsService } from 'src/app/app-settings.service';

const baseurl = 'http://localhost:3000/'
const headers = {
 'Content-Type' : 'application/json',
 'Access-Control-Allow-Origin': '*'
}

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})

export class AskQuestionComponent implements OnInit {

  constructor(private router: Router,
    public settings: AppSettingsService) { }

  question = {
    body: ""
  }

  //todo
  //send to api
  submit() {
    var quest = {
      text: this.question.body,
      user: localStorage.getItem('username'),
      points: 0,
      tags: []
    }


    Axios.post(baseurl + 'questions/ask', quest ,{headers : headers})
    .then((resp)=> {
        console.log('aqui')
        console.log(resp)
      })
    .catch((error) => {
        console.log(error)
    })
  }

  cancel() {
    this.router.navigateByUrl('/questions');
  }


  //todo
  //check if it is edit or write
  ngOnInit() {
    if(!localStorage.getItem('username')) {
      this.router.navigateByUrl('/login');
    }
  }

}
