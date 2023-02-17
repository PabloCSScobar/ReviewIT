import { Router, Routes } from '@angular/router';
import { NewPostComponent } from './core/routes/new-post/new-post.component';
import { PostDetailComponent } from './core/routes/post-detail/post-detail.component';
import { PostListContainerComponent } from './core/routes/post-list/post-list.component';
import { LoginPageComponent } from './core/routes/login-page/login-page.component';
import { LoginFormComponent } from './core/components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './core/components/auth/register-form/register-form.component';
import { LoggedUserResolver } from './core/data-access/resolvers/logged-user.resolver';
import { inject } from '@angular/core';
import { AuthService } from './permissions/services/auth.service';

const isNotLoggedGuard = () => !inject(AuthService).isLogged() ? true : inject(Router).navigate(['/posts']);
const isLoggedGuard = () => inject(AuthService).isLogged() ? true : inject(Router).navigate(['/auth/login']);

export const routes: Routes = [
  {
    path: '',
    resolve: {
      loggedUser: LoggedUserResolver,
    },
    children: [
      {
        path: 'posts',
        component: PostListContainerComponent,
      },
      {
        path: 'posts/new',
        canActivate: [isLoggedGuard],
        component: NewPostComponent,
      },
      {
        path: 'posts/:id',
        component: PostDetailComponent,
      },
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'auth',
    component: LoginPageComponent,
    canActivate: [isNotLoggedGuard],
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
  {
    path: '**',
    redirectTo: '/posts',
  }
];
