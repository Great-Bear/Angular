import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private heroService : HeroService, private router : Router) { }

  Login : string = "";
  Password : string = "";
  Name : string = "";

  ErrorLogin : string = "";
  ErrorPassword : string = "";
  ErrorName : string = "";
  ErrorSingUp : string = "";

  ngOnInit(): void {
  }
  SingUp(){
    this.Login ? this.ErrorLogin ="" : this.ErrorLogin = "Login field can`t be empty";
    this.Password ? this.ErrorPassword = "" : this.ErrorPassword = "Password field can`t be empty";
    this.Name ? this.ErrorName = "": this.ErrorName = "Name field can`t be empty";

    if(!this.Login || !this.Password || !this.Name){
      return;
    }

      this.heroService.CreateNewAuthor({ login: this.Login,
                                         Password : this.Password ,
                                         Name : this.Name }).subscribe(res => { 
                                           this.ErrorSingUp = res;
                                           if(!res.length){
                                            this.router.navigate(['SingUp/SingIn']);
                                           }
                                           });
  }
}
