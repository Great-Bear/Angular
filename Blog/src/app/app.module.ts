import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { SearchBlogComponent } from './search-blog/search-blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    FooterComponent,
    ListBlogsComponent,
    SearchBlogComponent,
    NavComponent,
    AboutComponent,
    SingInComponent,
    HomePageComponent,
    SingOutComponent,
    NewBlogComponent,
    EditBlogComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
