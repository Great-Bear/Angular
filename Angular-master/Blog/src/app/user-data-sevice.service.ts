import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataSevice {

  Author = new BehaviorSubject<string>("");

  constructor() {}
}
