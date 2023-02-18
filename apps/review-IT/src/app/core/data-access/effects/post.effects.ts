import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Post } from '../../models/post.model';
import {
  AddAnswer,
  AddAnswerSuccess,
  AddPost,
  AddPostSuccess,
  LoadPostCategories,
  LoadPostCategoriesSuccess,
  LoadPostDetail,
  LoadPostDetailSuccess,
  PostActionTypes,
} from '../actions/post.actions';
import { LoadPosts, LoadPostsSuccess } from '../actions/post.actions';
import { forkJoin } from 'rxjs';
import { AnswerService } from '../services/answer.service';
import { Router } from '@angular/router';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { PaginateResponse } from 'api-interfaces';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadPosts>(PostActionTypes.LoadPosts),
      map((action) => action.payload),
      switchMap((p) =>
        this.postService.getPosts(
          p.searchedTerm,
          p.postFilter,
          p.categoryFilter,
          p.page
        )
      ),
      map((posts: PaginateResponse<Post>) => new LoadPostsSuccess(posts))
    )
  );

  loadPostDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadPostDetail>(PostActionTypes.LoadPostDetail),
      map((action) => action.payload),
      switchMap((id) =>
        forkJoin([
          this.postService.getPostDetails(id),
          this.answerService.getAnswers(id),
        ])
      ),
      map(([post, answers]) => new LoadPostDetailSuccess(post, answers))
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddPost>(PostActionTypes.AddPost),
      map((action) => action.payload),
      switchMap((post) => this.postService.createPost(post)),
      map((post) => new AddPostSuccess(post))
    )
  );

  addPostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<AddPostSuccess>(PostActionTypes.AddPostSuccess),
        tap((action) => {
          this.router.navigate(['/posts', action.payload.id]);
        })
      ),
    { dispatch: false }
  );

  addAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddAnswer>(PostActionTypes.AddAnswer),
      map((action) => action.payload),
      switchMap(({ answer, postId }) =>
        this.answerService.createAnswer(answer, postId)
      ),
      map(() => new AddAnswerSuccess())
    )
  );

  addAnswerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddAnswerSuccess>(PostActionTypes.AddAnswerSuccess),
      concatLatestFrom(() =>
        this.store.select((state) => state.posts.selectedPost!.id)
      ),
      map(([, postId]) => new LoadPostDetail(postId))
    )
  );

  loadPostCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadPostCategories>(PostActionTypes.LoadPostCategories),
      switchMap(() => this.postService.getPostCategories()),
      map((categories) => new LoadPostCategoriesSuccess(categories))
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private answerService: AnswerService,
    private router: Router,
    private store: Store<AppState>
  ) { }
}
