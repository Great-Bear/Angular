import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroService } from '../hero.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { UserDataSevice } from '../user-data-sevice.service';

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
 
  @Output() onChangedImg = new EventEmitter<Map<number,SafeResourceUrl>>();
  ChangedImg(increased : any){
    this.onChangedImg.emit(increased);
  }
  
  constructor(private httpService: HeroService,private sanitizer: DomSanitizer,private userData : UserDataSevice) 
  {
    userData.Author.getValue();
  }

  ShowAllBlogs(){
   this.httpService.getData().subscribe((data : any) =>{
     this.change(data);
     this.LoadImgs(data);
   });
  }

  LoadImgs(listBlogs : any){
    let Imgs = new Map<number, SafeResourceUrl>();
    for (let index = 0; index < listBlogs.length; index++) {
      this.httpService.getPicture(listBlogs[index].namePicture).toPromise().then(
        data => {
          const urlToBlob = window.URL.createObjectURL(data)   
          let urlP =  this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);          
          Imgs.set(listBlogs[index].id, urlP);
        }
      )    
    } 
    this.ChangedImg(Imgs);
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
