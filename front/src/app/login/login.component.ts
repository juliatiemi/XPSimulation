import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(private _router:Router) { }


  login(){
    if(!this.loginForm.valid){
      console.log('Invalid Form');
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
  }

  ngOnInit() {
  }

}
