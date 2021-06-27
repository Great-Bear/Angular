import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Input } from '@angular/core';
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
  }

  onChangedImg(imgBlogs : any){
    this.ImgsBlogs = imgBlogs;
  }

  constructor() 
  {   
    
  }
  ngOnInit(): void {
   
  }

}
