import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostCreate, PostDetail } from '../../models/post.model';
import { environment as env } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostCategory } from '../../models/post-category.model';
import { PaginateResponse } from 'api-interfaces';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = env.apiUrl;

  getPosts(
    searchedTerm: string,
    postFilter: string,
    categoryFilter: string | null,
    page: number
  ): Observable<PaginateResponse<Post>> {
    const params = new HttpParams()
      .set('searchedTerm', searchedTerm)
      .set('postFilter', postFilter)
      .set('categoryFilter', categoryFilter || '')
      .set('page', page.toString());
    return this.http.get<PaginateResponse<Post>>(this.apiUrl + 'posts', {
      params,
    });
  }

  createPost(post: PostCreate): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}posts`, post);
  }

  getPostDetails(postId: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.apiUrl}posts/${postId}`);
  }

  getPostCategories(): Observable<PostCategory[]> {
    return this.http.get<PostCategory[]>(`${this.apiUrl}post-categories`);
  }
}
