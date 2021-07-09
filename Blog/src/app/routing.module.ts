import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  { path: 'ListBlogs/Blog/:name', component: BlogComponent },
  { path: 'HomePage/Blog/:name', component: BlogComponent },
  { path: 'Blog/:name', component: BlogComponent },
  { path: 'HomePage/Delete/Blog/:name', component: BlogComponent },
  { path: 'ListBlogs', component: ListBlogsComponent },
  { path: 'SingIn', component: SingInComponent },
  { path: 'SingUp/SingIn', component: SingInComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'SingOut', component: SingOutComponent },
  { path: 'AddBlog', component: NewBlogComponent },
  { path: 'HomePage/EditBlog/:Author/:idBlog',component: EditBlogComponent },
  { path: 'SingUp', component: SingUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
