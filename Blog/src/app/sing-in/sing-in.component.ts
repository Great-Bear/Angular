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

  valueAction: string  = "Sing In"; //если тут не будет этой инициализации то текста в кнопне не будет

  constructor(private heroService: HeroService,
              private userDataService : UserDataSevice,
              private router: Router,) { }

  SingIn(){
      this.heroService.SingIn("1","1234").subscribe((res : any) => this.userDataService.Author.next(res.author))
                                                      //Почему если any всё работает а если object нет
      this.router.navigate(['HomePage']);
  }

  ngOnInit(): void {  
  }
 
}
