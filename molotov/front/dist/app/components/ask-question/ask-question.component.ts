import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  constructor() { }

  question = {
    title: "",
    body: ""
  }

  //todo
  //send to api
  submit() {
    
  }

  cancel() {
  //  go back
  }


  //todo
  //check if it is edit or write
  ngOnInit() {
  }

}
