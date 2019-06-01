import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/app-settings.service';
import {Router} from "@angular/router";
import Axios from 'axios';

 const baseurl = 'http://localhost:3000/'
 const headers = {
  'Content-Type' : 'application/json',
  'Access-Control-Allow-Origin': '*'
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
    public settings: AppSettingsService) { }

  user = {
    _id: '',
    answers: [],
    password: '',
    questions: [],
    points: 0,
    about: ''
  };
  edit = false;
  editPassword = false;
  newUsername = "";
  newAbout = "";
  newPassword = "";
  confirmPassword = "";

  changePassword() {
    this.editPassword = true;
  }

  cancelChangePassword() {
    this.newPassword = "";
    this.confirmPassword = "";
    this.editPassword = false;
  }

  cancel() {
    this.editPassword = false;
    this.newPassword = "";
    this.confirmPassword = "";
    this.newAbout = "";
    this.newUsername = "";
    this.edit = false;
  }

  savePassword() {
    if(this.confirmPassword == this.newPassword){
      var userid = localStorage.getItem('username'); ///id do usuario precisa estar aqui
      Axios.patch(baseurl + 'users/pass/' + userid, { password: this.newPassword, about: this.newAbout})
        .then((resp) => {
            console.log(resp)
            console.log('edicao executada');
            this.editPassword = false;
        })
        .catch((error) => {
            console.log(error)
        })
    }
  }

  //todo
  //send to api
  submit() {
    var userid = localStorage.getItem('username'); ///id do usuario precisa estar aqui
    Axios.patch(baseurl + 'users/desc/' + userid, { password: this.newPassword, about: this.newAbout})
      .then((resp) => {
          console.log(resp)
          console.log('edicao executada');
          this.edit = false;
          this.user.about = this.newAbout;
      })
      .catch((error) => {
          console.log(error)
      })
  }


  editProfile() {
    this.edit = true;
  }


  delete() {
    Axios.delete(baseurl + 'users/' + localStorage.getItem('username') )
      .then((resp) =>{
          if(resp.status === 200){
            this.router.navigateByUrl('/questions');
          } else {
          console.log(resp.data)
          }
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response.data)
          console.log(error.response.status)         
        }
      })
  }
  //todo
  //check userid
  ngOnInit() {

    var gotUser = localStorage.getItem('username');
    console.log(this.user);

    Axios.get(baseurl + 'users/users/' + gotUser, { headers : headers })
    .then((resp) =>{
        if(resp.status === 200){
          console.log(resp) ///bota todos os valores como padrao aqui nessa parte
          this.user = resp.data[0];
          console.log(this.user); 
        } else {
        console.log(resp.data)
        }
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)         
      }
    })
  }

}
