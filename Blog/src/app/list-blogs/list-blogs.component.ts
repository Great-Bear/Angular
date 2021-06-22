import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})

export class ListBlogsComponent implements OnInit {

 ListBlogs : any;
  onChanged(blogs:any){
    this.ListBlogs = blogs;
  }

  constructor() 
  {   
  }
  ngOnInit(): void {
  
  }

}
