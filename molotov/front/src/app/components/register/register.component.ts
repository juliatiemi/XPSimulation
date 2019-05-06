import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  username = "";
  password = "";
  confirmPassword = "";
  diffPasswords = false;

  submit() {
    this.diffPasswords = false;
    if(this.password != this.confirmPassword) {
      this.diffPasswords = true;
      return;
    }

    //send to api
  }
  
  cancel() {
    this.router.navigateByUrl('/questions');
  }
  
  ngOnInit() {
    this.diffPasswords = false;
  }

}
