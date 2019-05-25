import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppSettingsService {
  
  readonly LOCALSTORAGE_USERDATA : string = 'userdata';

  constructor() { }
}
