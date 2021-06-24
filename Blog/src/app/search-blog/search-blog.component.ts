import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {

  ErrorSearch: string | undefined;
  valueSearch : string = "";
  ListBlogs : any; 

  @Output() onChanged = new EventEmitter<any>();
  change(increased : any) {
    this.onChanged.emit(increased);
  }
  
  constructor(private httpService: HeroService) 
  {
  }

  ShowAllBlogs(){
    this.httpService.getData().subscribe((data : any) => this.change(data)); 
  }

  SearchBlog(nameBlog? : string){
    this.ErrorSearch = "";
      if(this.valueSearch.length == 0 && nameBlog == undefined){
        this.ErrorSearch = "value can`t be empty";
      }
      else{
        if(nameBlog == undefined){
          nameBlog = this.valueSearch;
        }           
        this.httpService.getData(nameBlog).subscribe((data : any) => this.change(data)); 
      }
    }
  ngOnInit(): void {
    this.ShowAllBlogs();
  }
}
