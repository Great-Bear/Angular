import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})

export class ListBlogsComponent implements OnInit {

 ListBlogs : any;
 ErrorSearch: string | undefined;
 selectedItem : string | undefined;

  constructor() 
  {
    this.selectedItem = "fdsafsdf";
    fetch(`https://localhost:44346/Blog`)
    .then(res => res.json())
    .then(
        data => {
          
          this.ListBlogs = data; 
          console.log(this.ListBlogs);     
        },
        error => {
          alert("Error Server");
        }
    )
  }
  SearchBlog(){
   let valueSearch = document.getElementById("SearchInp")?.nodeValue;

    if(valueSearch?.length == 0){
      this.ErrorSearch="value is empty";
      return;
    }
    fetch(`https://localhost:44346/Blog/${valueSearch}`)
    .then(res => res.json())
    .then(
        data => {
          
          this.ListBlogs = data; 
          console.log(this.ListBlogs);     
        },
        error => {
          alert("Error Server");
        }
    )
  }
  ngOnInit(): void {
  
  }

}
