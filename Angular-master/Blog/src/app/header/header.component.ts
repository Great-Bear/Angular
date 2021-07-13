import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fileFiled : any;
  addPhoto(event: any){
    let target = event.target || event.srcElement;
    this.fileFiled = target.files[0];
    console.log(this.fileFiled);
    const formData = new FormData();
    formData.append('file', this.fileFiled);
    let final_data  = formData;
    this.service.SendFile(final_data).subscribe(res => console.log(res));
  }
  constructor(private service : HeroService) { }

  ngOnInit(): void {
  }

}
