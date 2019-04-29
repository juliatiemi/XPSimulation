import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  constructor(private _http:HttpClient) { }

  submit(body:any){
    return this._http.post('http://127.0.0.1:3000/ask/submit', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}