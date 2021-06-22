import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { SearchBlogComponent } from './search-blog/search-blog.component';
import { NavComponent } from './nav/nav.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    FooterComponent,
    ListBlogsComponent,
    SearchBlogComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
