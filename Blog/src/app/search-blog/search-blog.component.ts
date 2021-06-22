import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {

  ErrorSearch: string | undefined;
  valueSearch : string | undefined;
  ListBlogs : any; 

  @Output() onChanged = new EventEmitter<any>();
  change(increased : any) {
    this.onChanged.emit(increased);
  }
  
  constructor() 
  {
    this.ShowAllBlogs();  
  }

  ShowAllBlogs(){
    this.SearchBlog("null");  
  }

  SearchBlog(nameBlog? : string){
    this.ErrorSearch = "";
      if(this.valueSearch == undefined && nameBlog == undefined){
        this.ErrorSearch = "value can`t be empty";
      }
      else{
        if(nameBlog == undefined){
          nameBlog = this.valueSearch;
        }           
        fetch(`https://localhost:44346/Blog/${nameBlog}`)
        .then(res => res.json())
        .then(
          data => {           
            this.change(data);    
          },
          error => {
            alert("Error Server");
          }
        )
      }
    }
  ngOnInit(): void {
  }
}
