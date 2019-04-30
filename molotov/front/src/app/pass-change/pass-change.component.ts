import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    newPass: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  });

  username: String = '';
constructor(private _router:Router, private _userService:UserService) {
  this._userService.user()
  .subscribe(
    data=>this.addInfo(data),
    error=>this._router.navigate(['/login'])
  )
 }

 addInfo(data){
  this.username = data._id;
}

submit(){
  if(!this.registerForm.valid || (this.registerForm.controls.newPass.value != this.registerForm.controls.passwordConfirm.value)){
    console.log('Invalid Form');
    return;
  }
  this._userService.change_pass(JSON.stringify(this.registerForm.value), this.username)
  .subscribe(
    data=> {console.log(data); this._router.navigate(['/profile']);},
    error=> console.error(error)
  )
  //console.log(JSON.stringify(this.registerForm.value));
}

  ngOnInit() {
  }

}
