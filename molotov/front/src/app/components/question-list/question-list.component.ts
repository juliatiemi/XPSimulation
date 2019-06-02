import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Axios from 'axios';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

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
  tags_text = "";

  search() {
    if (this.tags_text == ""){
      this.get_all_questions();
      return;
    }
    var tag_list = this.tags_text.split(',');
    var i, j;
    var quest;
    var tag;
    var remove;
    var temp_questions = this.get_all_questions();
    for (i in temp_questions){
      quest = temp_questions[i];
      remove = true;
      for (j in tag_list){
        tag = tag_list[j];
        if (quest.tags.includes(tag)){
          remove = false;
          break;
        }
      }
      if (remove){
        temp_questions.splice(i, 1)
      }
    }
    this.questions = temp_questions;
  }

  get_all_questions(){
    var temp_questions;
    Axios.get(baseurl + 'questions/user/', {headers:headers})
    .then((resp) => {
        if(resp.status === 200){
          temp_questions = resp.data;
          console.log(temp_questions);
        }
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)
      }
    })
    return temp_questions;
  }

  ngOnInit() {
    this.questions = this.get_all_questions();
  }

}
