import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Axios from 'axios';
import { AppSettingsService } from 'src/app/app-settings.service';

 const baseurl = 'http://localhost:3000/'
 const headers = {
  'Content-Type' : 'application/json',
  'Access-Control-Allow-Origin': '*'
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    public settings: AppSettingsService) { 
  }

  register = {
    username: "",
    password: "",
    confirmPassword: ""
  }
  
  diffPasswords = false;

  submit() {
    this.diffPasswords = false;
    if(this.register.password != this.register.confirmPassword) {
      this.diffPasswords = true;
      return;
    }
    Axios.post(baseurl + 'users/register/', this.register, { headers : headers })
      .then((resp) =>{
          if(resp.status === 200){
            console.log(resp.data)
            localStorage.setItem(this.settings.LOCALSTORAGE_USERDATA, JSON.stringify(resp.data));
            this.router.navigateByUrl('/login');
            console.log("pq?")
          } else {
          console.log(resp.data)
          console.log("ruim?")
          this.router.navigateByUrl('/login');
          }
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.data)
          console.log(error.response.status)         
        }
      })
    //send to api
  }
  
  cancel() {
    this.router.navigateByUrl('/login');
  }
  
  ngOnInit() {
    this.diffPasswords = false;
  }

}
