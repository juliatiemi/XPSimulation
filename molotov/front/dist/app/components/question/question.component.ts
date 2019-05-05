import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question = {
    title: "pq a vida é difícil?",
    body: "serio sacanagem isso aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn aksudhahsa asha asoihua aahb ajskasnkajn",
    author: "Tiemi"
  };
  answers = [{body: "dhahsa asha asoihua aa", author: "ze mane"}, {body: "dhahsa asha asoihua aadhahsa asha asoihua aa", author: "julia"}, {body: "dhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aa", author: "a"}, {body: "dhahsa asha asoihua aadhahsa", author: "joaozinho"}];
  answer = false;
  newAnswerBody;

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
  }

  constructor() { }

  //get answers
  ngOnInit() {
    this.answer = false;
  }

}
