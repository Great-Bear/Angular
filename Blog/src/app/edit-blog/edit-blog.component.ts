import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { BlogObj } from '../models/BlogObj';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  Authorname : string | undefined;
  IdBlog: number | undefined;
  blogObj : any;

  constructor(private activateRoute: ActivatedRoute,
              private heroService: HeroService,
              private router : Router) 
  {
    activateRoute.params.subscribe(params => { this.Authorname = params['Author']; this.IdBlog = params['idBlog']; })
  }

  SaveChanges(){
    this.blogObj.date = (new Date).toISOString();
    this.heroService.getEditBlog(this.blogObj).subscribe(res =>  this.router.navigate([`Blog/${this.blogObj.name}`]));
  }
  ngOnInit(): void {
    this.heroService.getBlogById(this.IdBlog).subscribe(data => {
      if(data instanceof Object)
      this.blogObj = data
    });
  }

}
