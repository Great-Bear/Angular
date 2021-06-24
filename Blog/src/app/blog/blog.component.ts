import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { BlogObj } from '../models/BlogObj';
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
               private httpService: HeroService) 
  {
    activateRoute.params.subscribe(params => this.BlogObj.name = params['name']);
  }
  

  ngOnInit(): void {
    if(this.BlogObj.name == ":name"){
      this.router.navigate(['ListBlogs']);
    }
    else{
        this.httpService.getData(this.BlogObj.name).subscribe((blogs : any) => this.BlogObj = blogs[0]);
        this.Img = "assets/Imgs/Penguins.png";
    }
  }
}