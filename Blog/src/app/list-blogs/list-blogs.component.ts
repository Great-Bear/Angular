import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataSevice } from '../user-data-sevice.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { newArray } from '@angular/compiler/src/util';

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

    if(this.isHomePage = (Boolean)(this.router.url.includes("HomePage"))){

    
    let newArray = new Array();
    if(this.ListBlogs instanceof Array){   
      for(let i = 0; i < this.ListBlogs.length; i++){
        console.log(this.userDataSevice.Author.getValue())
        if(this.ListBlogs[i].authorName == this.userDataSevice.Author.getValue()){
          newArray.push(this.ListBlogs[i]);
          this.ListBlogs = newArray;
          console.log(newArray)
        }
      }
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
   userDataSevice.Author.subscribe(()=>{

    let newArray = new Array();
    if(this.ListBlogs instanceof Array){   
      for(let i = 0; i < this.ListBlogs.length; i++){
        console.log(this.userDataSevice.Author.getValue())
        if(this.ListBlogs[i].authorName == this.userDataSevice.Author.getValue()){
            newArray.push(this.ListBlogs[i]);
          this.ListBlogs = newArray;
        }
      }
    }


   })
  }
  ngOnInit(): void {
   
  }

}
