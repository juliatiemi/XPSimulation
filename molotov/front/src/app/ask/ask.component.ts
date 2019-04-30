import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AskService } from '../ask.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  askForm:FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
    tags: new FormControl(null)
  });
  constructor(private _router:Router, private _askService:AskService) { }

  submit() {
    if(!this.askForm.valid){
      console.log('Invalid Form');
      return;
    }

    this._askService.submit(JSON.stringify(this.askForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/quesion']);},
      error=> console.error(error)
    )
    //console.log(JSON.stringify(this.registerForm.value));
  }

  ngOnInit() {
  }

}
