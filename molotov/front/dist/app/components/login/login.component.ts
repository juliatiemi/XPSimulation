import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInfo = {
    username: "",
    password: ""
  }

  //todo
  sumbmit() {
  // send to api
  }

  cancel() {
  //  go back
  }

  constructor() { }

  ngOnInit() {
  }

}
