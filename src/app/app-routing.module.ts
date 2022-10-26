import { Routes } from '@angular/router';
import { NewPostComponent } from './routes/new-post/new-post.component';
import { PostDetailComponent } from './routes/post-detail/post-detail.component';
import { PostListContainerComponent } from './routes/post-list/post-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PostListContainerComponent,
  },
  {
    path: 'posts/new',
    component: NewPostComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
];
