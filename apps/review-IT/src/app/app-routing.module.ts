import { Routes } from '@angular/router';
import { NewPostComponent } from './core/routes/new-post/new-post.component';
import { PostDetailComponent } from './core/routes/post-detail/post-detail.component';
import { PostListContainerComponent } from './core/routes/post-list/post-list.component';
import { LoginPageComponent } from './core/routes/login-page/login-page.component';
import { LoginFormComponent } from './core/components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './core/components/auth/register-form/register-form.component';

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
