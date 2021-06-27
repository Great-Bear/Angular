import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  { path: 'ListBlogs/Blog/:name', component: BlogComponent },
  { path: 'Blog/:name', component: BlogComponent },
  { path: 'ListBlogs', component: ListBlogsComponent },
  { path: 'SingIn', component: SingInComponent }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
