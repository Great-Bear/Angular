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
  public getImage(url: string): Observable<SafeResourceUrl> {
    return this.http
      .get(url, { responseType: 'blob' })
      .pipe(
        map(x => {
          const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
          return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
        }),
      );
  }
 f:any;
  ngOnInit(): void {
    if(this.BlogObj.name == ":name"){
      this.router.navigate(['ListBlogs']);
    }
    else{
        this.httpService.getData(this.BlogObj.name).subscribe((blogs : any) => this.BlogObj = blogs[0]);
        //this.Img = "assets/Imgs/Penguins.png";
        let f;
        this.httpService.getPicture().subscribe((pictureArrBuff : any) => console.log(pictureArrBuff));
        
      /* this.httpService.getPicture().subscribe((pictureArrBuff : any) => {
        const urlToBlob = window.URL.createObjectURL(pictureArrBuff)   
        let u =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);        
        this.url = u;     
       });*/

       // const urlToBlob = window.URL.createObjectURL(f) // get a URL for the blob
        
         //   let u =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
           
       // this.url = u;
    }
  
  }
}