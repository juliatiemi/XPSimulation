import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor() { }

  questions = [{id: 1, title: "dhahsa asha asoihua aa", author: "ze mane"}, {id: 2, title: "dhahsa asha asoihua aadhahsa asha asoihua aa", author: "julia"}, {id:3, title: "dhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aadhahsa asha asoihua aa", author: "a"}, {id: 4, title: "dhahsa asha asoihua aadhahsa", author: "joaozinho"}];

  ngOnInit() {
  }

}
