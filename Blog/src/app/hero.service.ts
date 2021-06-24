import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient){ }
      
  getData(nameBlog : string = ""){
    return this.http.get(`https://localhost:44346/Blog/${nameBlog}`)
  }
  getPicture(){
    return this.http.get(`https://localhost:44346/Blog/fileName/2`)
  }
}
