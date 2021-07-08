import { Component, OnInit } from '@angular/core';
import { BlogObj } from '../models/BlogObj';
import { HeroService } from '../hero.service';
import { UserDataSevice } from '../user-data-sevice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  blogObj : BlogObj = new BlogObj();


  constructor(private heroService: HeroService,
              private userData: UserDataSevice,
              private router: Router) { }

  ngOnInit(): void {
  }
  CreateBlog(){
    this.blogObj.date = (new Date).toISOString();
    this.blogObj.countComents = 0;
    this.blogObj.AuthorName = this.userData.Author.getValue();
    this.blogObj.namePicture = "empty.jpg";
    this.heroService.CreateBlog(this.blogObj).subscribe(res =>  this.router.navigate([`Blog/${this.blogObj.name}`]));
  }
}
