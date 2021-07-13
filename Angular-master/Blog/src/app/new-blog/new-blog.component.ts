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

  fileFiled : any;
  addPhoto(event: any){
    let target = event.target || event.srcElement;
    this.fileFiled = target.files[0];
  }


  ngOnInit(): void {
  }
  CreateBlog(){
    this.blogObj.date = (new Date).toISOString();
    this.blogObj.countComents = 0;
    this.blogObj.AuthorName = this.userData.Author.getValue();
    this.blogObj.namePicture = "empty.jpg";

    const formData = new FormData();
    formData.append('Blog', JSON.stringify(this.blogObj));

    let final_data = formData;
   
 

    //this.heroService.CreateBlog(final_data).subscribe(res =>  this.router.navigate([`Blog/${this.blogObj.name}`]));
    this.heroService.CreateBlog(final_data).subscribe(res =>  console.log(res));
  }
}
