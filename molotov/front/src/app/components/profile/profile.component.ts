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
    username: "uaishda",
    password: "oshdsas",
    about: "jahshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisshiasndhaidhna sidhalsnd aisdha"
  }
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

  //todo
  //send to api
  submit() {


  

  }


  editProfile() {
    this.edit = true;
    var userid = 'misterio'; ///id do usuario precisa estar aqui
    Axios.patch(baseurl + 'users/desc/' + userid, { password: this.newPassword, about: this.newAbout, _id: this.newUsername })
      .then((resp) => {
          console.log(resp)
          console.log('edicao executada');
      })
      .catch((error) => {
          console.log(error)
      })
  }


  delete() {
    Axios.delete(baseurl + 'users/' + localStorage.getItem(this.settings.LOCALSTORAGE_USERDATA) )
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

    //this.user é userid!!!  nao é um

    Axios.post(baseurl + 'users/users/' + this.user, { headers : headers })
    .then((resp) =>{
        if(resp.status === 200){
          console.log(resp) ///bota todos os valores como padrao aqui nessa parte
          this.newUsername = resp.data._id;
          this.newPassword = resp.data.password;
          this.newAbout = resp.data.about; 
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
