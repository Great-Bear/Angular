import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idUser: number = -1;

  ChangeId(increased:any){
          this.idUser = increased;
  }
}
