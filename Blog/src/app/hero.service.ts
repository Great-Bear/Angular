import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient,private sanitizer: DomSanitizer){ }
      
  SingIn(login: string, password: string){

    let body = {
      login:"TestLogin",
      password: "TestPassword"
    }
    return this.http.post("https://localhost:44346/Blog/",body);
    
  }

  getData(nameBlog : string = ""){
    return this.http.get(`https://localhost:44346/Blog/${nameBlog}`)
  }
  getPicture (namePicture : string) {
    return this.http.get(`https://localhost:44346/Blog/${namePicture}/2`,{ responseType: 'blob' })

  /* let q = new Observable<SafeResourceUrl>();

  let pictureArrBuff = this.http.get(`https://localhost:44346/Blog/fileName/2`,{ responseType: 'blob' }).
  toPromise().then
    (
    data => {
      console.log("ok")
      const urlToBlob = window.URL.createObjectURL(data)   
      let u = this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);     
      let a = new Observable<SafeResourceUrl>(subscrime => subscrime.next(u)) ;
      q = a;
    },
    error => {
      console.log('Error: ', error);
    }).then();
       
    }  */ 
  }

}
