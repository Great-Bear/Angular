import { UserDataSevice } from '../user-data-sevice.service';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private heroService: HeroService,
              private userDataService : UserDataSevice,
              private router: Router,) { }

  Login: string = "";
  Password: string = "";

  ErrorLogin : string = "";
  ErrorPassword : string = "";
  ErrorSingIn : string = "";

  SingIn(){
    this.ErrorSingIn = "";

    this.Login ? this.ErrorLogin = "" : this.ErrorLogin = "Login field can`t be empty";

    this.Password ? this.ErrorPassword = "" : this.ErrorPassword = "Password filed can`t be empty" 
    
    if(this.ErrorLogin || this.ErrorPassword) return;  

      this.heroService.SingIn(this.Login, this.Password).subscribe((res : any) => {
        if(!res){
            this.ErrorSingIn = "Incorrect password or login";
            
        }
        else{
          this.userDataService.Author.next(res.author);
          this.router.navigate([`HomePage`]);
        }
      })                                                          
  }

  ngOnInit(): void {  
  }
 
}
