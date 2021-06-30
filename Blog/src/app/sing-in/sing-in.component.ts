import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  idTest: number = 0;

  constructor(private testService: TestServiceService) 
  { 
    testService.subject.subscribe({
    next: (v) => this.idTest = v});
  }

  SingIn(){
    this.testService.subject.next(200);
  }

  ngOnInit(): void {  
  }
 
}
