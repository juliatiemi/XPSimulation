import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question = {
    title: "pq a vida é difícil?",
    body: "serio sacanagem isso aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn"
  };
  answers = ["dhahsa asha asoihua aa", "dhahsa asha asoihua aadhahsa asha asoihua aa", "dhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aa", "dhahsa asha asoihua aadhahsa"];
  answer = false;

  answerQuestion() {
    this.answer  = true;
  }

  cancel() {
    this.answer = false;
  }

  //to do
  //send to api
  submit() {

  }

  constructor() { }

  //get answers
  ngOnInit() {
    this.answer = false;
  }

}
