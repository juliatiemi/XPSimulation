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
    title: "",
    text: ""
  };
  tag = "";
  tags = [];

  //todo
  //send to api
  submit() {
    var quest = {
      title: this.question.title,
      text: this.question.text,
      user: localStorage.getItem('username'),
      points: 0,
      tags: []
    }

    //aqui aqui aqui
    Axios.post(baseurl + 'questions/ask', quest, {headers : headers})
    .then((resp)=> {
        console.log('aqui');
        console.log(resp);
        var tag_list;
        if (this.tag == ''){
          tag_list = [];
        }
        else{
          tag_list = this.splitTags(this.tag);
        }
        console.log(tag_list);
        var createdQuestionId = resp.data.createdQuestion._id;
        Axios.patch(baseurl + 'questions/tags/' + createdQuestionId , {headers: headers, tags: tag_list})
          .then((resp)=> {
            console.log('aqui')
            console.log(resp)
          })
          .catch((error) => {
              console.log(error)
          })
        this.router.navigateByUrl('/questions');
      })
    .catch((error) => {
        console.log(error);
    })
  }

  cancel() {
    this.router.navigateByUrl('/questions');
  }

  splitTags(tag: string) {
    return tag.split(',');
  }

  //todo
  //check if it is edit or write
  ngOnInit() {

  }

}
