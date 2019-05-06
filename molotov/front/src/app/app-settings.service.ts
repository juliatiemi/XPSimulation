import { Injectable } from '@angular/core';

@Injectable()

export class AppSettingsService {
  
  readonly LOCALSTORAGE_USERDATA : string = 'userdata';

  constructor() { }
}
