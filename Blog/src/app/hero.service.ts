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
      Login: login,
      Password: password
    }
    return this.http.post("https://localhost:44346/Blog/", body);   
  }
  getBlogById(id: number | undefined){   
    return this.http.get(`https://localhost:44346/BlogOperation/${id}`);
  }
  getEditBlog(blog: any){
    return this.http.post(`https://localhost:44346/BlogOperation/`, blog)
  }
  CreateBlog(blog: any){
    return this.http.post(`https://localhost:44346/BlogOperation/Create/1`, blog);
  }
  CreateNewAuthor(author : any){
    return this.http.post(`https://localhost:44346/Account/`,author,{ responseType : "text" });
  }
  getData(nameBlog : string = ""){
    return this.http.get(`https://localhost:44346/Blog/${nameBlog}`, {responseType: 'json'})
  }
  getPicture (namePicture : string) {
    return this.http.get(`https://localhost:44346/Blog/${namePicture}/2`,{ responseType: 'blob' })
  }
  deleteBlog(id:number | undefined){
    return this.http.delete(`https://localhost:44346/BlogOperation/${id}`);
  }

}
