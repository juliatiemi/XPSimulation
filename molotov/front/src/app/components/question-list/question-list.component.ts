import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Axios from 'axios';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { TagContentType } from '@angular/compiler';

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
    var tag_list = this.tags_text.split(',');
    if(this.tags_text == ""){
      return;
    }
    var aux = [];
    var j;
    var i;
    var l;
    for(j in this.questions){
      if(this.questions[j].tags){
        for(i in this.questions[j].tags){
            for(l in tag_list){
                if(tag_list[l] == this.questions[j].tags[i]){
                  aux.push(this.questions[j]);
                  break;
                }
            }
        }
      }
    }
    this.questions = aux;
    localStorage.setItem('tag', "");
  }

  get_all_questions(){
    Axios.get(baseurl + 'questions/user/', {headers:headers})
    .then((resp) => {
        if(resp.status === 200){
          this.questions = resp.data;
          console.log(this.questions);
          this.search();
        }
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)
      }
    })
  }

  ngOnInit() {
    this.tags_text = localStorage.getItem('tag');
    this.get_all_questions();
  }

}
