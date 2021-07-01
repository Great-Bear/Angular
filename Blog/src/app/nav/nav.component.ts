import { Component, OnInit } from '@angular/core';
import { UserDataSevice } from '../user-data-sevice.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAutorizeUser : boolean | undefined;

  constructor(private userDataService : UserDataSevice)
  {
      userDataService.Author.subscribe((name : String) => this.isAutorizeUser = (Boolean)(name))
      this.isAutorizeUser = (Boolean)(userDataService.Author.getValue());
  }

  ngOnInit(): void {
  }

}
