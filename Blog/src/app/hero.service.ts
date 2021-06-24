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
      
  getData(nameBlog : string = ""){
    return this.http.get(`https://localhost:44346/Blog/${nameBlog}`)
  }
  getPicture () : Observable<SafeResourceUrl>{
   // return this.http.get(`https://localhost:44346/Blog/fileName/2`,{ responseType: 'blob' })
  let pictureArrBuff = this.http.get(`https://localhost:44346/Blog/fileName/2`,{ responseType: 'blob' }).
  toPromise().then
    (
    data => {
      const urlToBlob = window.URL.createObjectURL(pictureArrBuff)   
      let u = this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);     
      let a = new Observable<SafeResourceUrl>(subscrime => subscrime.next(u)) ;
      return a;
    },
    error => {
      console.log('Error: ', error);
    });

  }
  getPicture2(){
    return this.http.get(`https://localhost:44346/Blog/fileName/2`,{ responseType: 'blob' })
  }

}
