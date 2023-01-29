import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = env.apiUrl;

  private TEMPORARY_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhd2XFgiIsInN1YiI6MSwiaWF0IjoxNjc0NjgwNjI1LCJleHAiOjE2NzQ2ODA2ODV9.VP3V7HxIZVn9-vyhCuP2_ZSGzv3DNZiWw6d5QtWuwaY';

  getMe() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TEMPORARY_TOKEN}`,
    });
    return this.http.get<User>(`${this.apiUrl}users/me`, { headers });
  }
}
