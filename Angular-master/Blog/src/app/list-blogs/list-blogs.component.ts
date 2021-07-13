import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserDataSevice } from '../user-data-sevice.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})

export class ListBlogsComponent implements OnInit {

 ListBlogs : any;
 ImgsBlogs : Map<number, SafeResourceUrl> = new Map<number, SafeResourceUrl>();

  onChanged(blogs: any){
    this.ListBlogs = blogs;
      if(this.isHomePage ){
        let newArray = new Array();
        if(blogs instanceof Array){   
          for(let i = 0; i < blogs.length; i++){
            if(blogs[i].authorName == this.userDataSevice.Author.getValue()){
                newArray.push(blogs[i]);               
            }
          }
          this.ListBlogs = newArray;
        } 
    }
  }

  onChangedImg(imgBlogs : any){
    this.ImgsBlogs = imgBlogs;
  }

  isHomePage : Boolean = false;

  constructor(private router : Router,
              private userDataSevice : UserDataSevice) 
  {   
   this.isHomePage = (Boolean)(this.router.url.includes("HomePage"));
  }
  ngOnInit(): void {
   
  }

}
