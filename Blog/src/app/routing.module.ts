import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';

const routes: Routes = [
  {path: 'Blog/:name', component: BlogComponent},
  {path: 'ListBlogs', component: ListBlogsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
