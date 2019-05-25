import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import {Router} from "@angular/router";
import { AppSettingsService } from 'src/app/app-settings.service';

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
    body: ""
  }

  //todo
  //send to api
  submit() {
    
  }

  cancel() {
    this.router.navigateByUrl('/questions');
  }


  //todo
  //check if it is edit or write
  ngOnInit() {
    if(!localStorage.getItem(this.settings.LOCALSTORAGE_USERDATA)) {
      this.router.navigateByUrl('/login');
    }
  }

}
