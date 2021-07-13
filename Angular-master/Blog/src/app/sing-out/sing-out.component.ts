import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDataSevice } from '../user-data-sevice.service';

@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.css']
})
export class SingOutComponent implements OnInit {

  constructor(private userDataService : UserDataSevice,
              private router : Router) 
  {

  }
  SingOut(){
    this.userDataService.Author.next("");
    this.router.navigate(['ListBlogs'])
  }
  ngOnInit(): void {
  }

}
