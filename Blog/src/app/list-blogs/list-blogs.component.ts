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
<<<<<<< HEAD

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
=======
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
>>>>>>> 9405fcaf43b03a4a080610b85cfcc6077faee089
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
