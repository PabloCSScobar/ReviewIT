import { Routes } from '@angular/router';
import { NewPostComponent } from './routes/new-post/new-post.component';
import { PostDetailComponent } from './routes/post-detail/post-detail.component';
import { PostListContainerComponent } from './routes/post-list/post-list.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
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
  {
    path: 'auth',
    component: LoginPageComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
