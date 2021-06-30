import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  subject = new Subject<number>();

  IdTest:number = 12;
  constructor() 
  { 
    this.subject.next(100);
  }
}
