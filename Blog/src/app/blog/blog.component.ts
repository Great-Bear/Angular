import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { BlogObj } from '../models/BlogObj';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Img : string | undefined;
  BlogObj : BlogObj = new BlogObj();
  isDeletePage : boolean = false;

  constructor( private activateRoute: ActivatedRoute,
               private router: Router,
               private httpService: HeroService,
               private http: HttpClient,
               private sanitizer: DomSanitizer) 
  {
    activateRoute.params.subscribe(params => this.BlogObj.name = params['name']);
    this.isDeletePage = (Boolean)(this.router.url.includes("Delete"));
  }
  public url : SafeResourceUrl | undefined;
  DeleteBlog(){
   this.httpService.deleteBlog(this.BlogObj.id).subscribe(res => { if(res == null){
     this.router.navigate(["HomePage"]);
   }});
  }
  ngOnInit(): void {
    if(this.BlogObj.name == ":name"){
      this.router.navigate(['ListBlogs']);
    }
    else{
       this.httpService.getData(this.BlogObj.name).toPromise().then(
         data => {
           if(data instanceof Array){
              this.BlogObj = data[0];    
              this.BlogObj.AuthorName = data[0].authorName;      
           }         
           if(this.BlogObj.namePicture != undefined) {
              this.httpService.getPicture(this.BlogObj.namePicture).subscribe((pictureArrBuff : any) => {
                const urlToBlob = window.URL.createObjectURL(pictureArrBuff)   
                this.url =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);           
              });
           }         
         },
         error => {
                alert("Error server");
         }
       )
    }
  }
}