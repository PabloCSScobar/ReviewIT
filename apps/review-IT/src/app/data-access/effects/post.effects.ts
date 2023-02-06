import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Post } from '../../models/post';
import { PostActionTypes } from '../actions/post.actions';
import { LoadPosts, LoadPostsSuccess } from '../actions/post.actions';


@Injectable()
export class PostEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostActionTypes.LoadPosts),
        switchMap(() => this.postService.getPosts('', '', '')),
        map((posts: Post[]) => new LoadPostsSuccess(posts))
    ));

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {}
}
