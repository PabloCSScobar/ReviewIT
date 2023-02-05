import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from '../data-access/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.match(/auth\//)) {
      return next.handle(request);
    }

    const authToken: string | null = this.authService.getToken();
    if (!authToken) {
      return next.handle(request);
    }
    if (request.url.match(/api\//) && authToken) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      });
    }
    return next.handle(request);
  }
}
