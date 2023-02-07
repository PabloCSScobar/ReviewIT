import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Post } from '../../models/post.model';
import { LoadPostDetail, LoadPostDetailSuccess, PostActionTypes } from '../actions/post.actions';
import { LoadPosts, LoadPostsSuccess } from '../actions/post.actions';
import { forkJoin } from 'rxjs';
import { AnswerService } from '../services/answer.service';


@Injectable()
export class PostEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType<LoadPosts>(PostActionTypes.LoadPosts),
        map(action => action.payload),
        switchMap((p) => this.postService.getPosts(p.searchedTerm, p.postFilter, p.categoryFilter)),
        map((posts: Post[]) => new LoadPostsSuccess(posts))
    ));

    loadPostDetail$ = createEffect(() => this.actions$.pipe(
        ofType<LoadPostDetail>(PostActionTypes.LoadPostDetail),
        map(action => action.payload),
        switchMap((id) => forkJoin([this.postService.getPostDetails(id), this.answerService.getAnswers(id)])),
        map(([post, answers]) => new LoadPostDetailSuccess(post, answers))
    ));

    constructor(
        private actions$: Actions,
        private postService: PostService,
        private answerService: AnswerService
    ) {}
}
