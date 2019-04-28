import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: String = '';
  about: String = '';
  constructor(private _user:UserService, private _router:Router) {
    this._user.user()
    .subscribe(
      data=>this.addInfo(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addInfo(data){
    this.username = data._id;
    this.about = data.about;
  }

  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data); this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

  remove(){
    this._user.remove(this.username)
    .subscribe(
      data=>{console.log(data); this._router.navigate(['/login'])},
      error=>console.error(error)
    )
    this._router.navigate(['/login'])
  }

  edit(){
    this._router.navigate(['/register'])
  }

  change_pass(){
    this._router.navigate(['/register'])
  }

}
