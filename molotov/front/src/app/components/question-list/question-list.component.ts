import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Axios from 'axios';

const baseurl = 'http://localhost:3000/';
const headers = {
 'Content-Type' : 'application/json',
 'Access-Control-Allow-Origin': '*'
}

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(private router: Router) { }

  questions = [];

  ngOnInit() {
    Axios.get(baseurl + 'questions/user/', {headers:headers})
    .then((resp) => {
        if(resp.status === 200){
          this.questions = resp.data;
          console.log(this.questions);
        }
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)
      }
    })
  }

}
