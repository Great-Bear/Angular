import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { BlogObj } from '../models/BlogObj';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Img : string | undefined;
  BlogObj : BlogObj = new BlogObj();

 
  constructor( private activateRoute: ActivatedRoute,
               private router: Router,
               private httpService: HeroService,
               private http: HttpClient,
               private sanitizer: DomSanitizer) 
  {
    activateRoute.params.subscribe(params => this.BlogObj.name = params['name']);
  //this.getImage('https://localhost:44346/Blog/fileName/2').subscribe(x => this.url = x)
  }
  public url : SafeResourceUrl | undefined;
  
  ngOnInit(): void {
    if(this.BlogObj.name == ":name"){
      this.router.navigate(['ListBlogs']);
    }
    else{
       this.httpService.getData(this.BlogObj.name).toPromise().then(
         data => {
           if(data instanceof Array){
              this.BlogObj = data[0];  
              console.log(data[0]);           
           }         
           if(this.BlogObj.namePicture != undefined) {
              this.httpService.getPicture(this.BlogObj.namePicture).subscribe((pictureArrBuff : any) => {
                const urlToBlob = window.URL.createObjectURL(pictureArrBuff)   
                this.url =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);           
              });
           }         
         },
         error => {

         }
       )
       // const urlToBlob = window.URL.createObjectURL(f) // get a URL for the blob
        
         //   let u =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
           
       // this.url = u;
    }
  
  }
}