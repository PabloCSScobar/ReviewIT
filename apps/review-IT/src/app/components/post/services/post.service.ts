import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, PostDetail } from '../models/post';
import { environment as env } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = env.apiUrl;

  getPosts(
    page: number,
    searchedTerm: string,
    postFilter: string,
    categoryFilter: string | null
  ): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts');
  }

  getPostDetails(postId: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.apiUrl}posts/${postId}`);
  }
}
