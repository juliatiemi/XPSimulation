import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

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
  }

  //todo
  //check userid
  ngOnInit() {

  }

}
