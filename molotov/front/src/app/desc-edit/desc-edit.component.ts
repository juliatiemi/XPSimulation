import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-desc-edit',
  templateUrl: './desc-edit.component.html',
  styleUrls: ['./desc-edit.component.css']
})
export class DescEditComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    newDesc: new FormControl(null, [Validators.required])
  });

  username: String = '';
  about: String = '';
constructor(private _router:Router, private _userService:UserService) {
  this._userService.user()
  .subscribe(
    data=>this.addInfo(data),
    error=>this._router.navigate(['/login'])
  )
 }

 addInfo(data){
  this.username = data._id;
  this.about = data.about
}

submit(){
  this._userService.edit(JSON.stringify(this.registerForm.value), this.username)
  .subscribe(
    data=> {console.log(data); this._router.navigate(['/profile']);},
    error=> console.error(error)
  )
  //console.log(JSON.stringify(this.registerForm.value));
}

  ngOnInit() {
  }

}
