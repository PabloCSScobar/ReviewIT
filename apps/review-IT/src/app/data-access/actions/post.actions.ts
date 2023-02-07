import { Action } from '@ngrx/store';
import { Answer } from '../../models/answer';
import { Post, PostDetail } from '../../models/post';


export enum PostActionTypes {
    LoadPosts = '[Post] Load Posts',
    LoadPostsSuccess = '[Post] Load Posts Success',
    LoadPostsFail = '[Post] Load Posts Fail',
    LoadPostDetail = '[Post] Load Post Detail',
    LoadPostDetailSuccess = '[Post] Load Post Detail Success',
    LoadPostDetailFail = '[Post] Load Post Detail Fail',
}

export class LoadPosts implements Action {
    readonly type = PostActionTypes.LoadPosts;
    constructor(public payload: {searchedTerm: string, postFilter: string, categoryFilter: string | null }) {}
}

export class LoadPostsSuccess implements Action {
    readonly type = PostActionTypes.LoadPostsSuccess;
    constructor(public payload: Post[]) {}
}

export class LoadPostsFail implements Action {
    readonly type = PostActionTypes.LoadPostsFail;
    constructor(public payload: string) {}
}

export class LoadPostDetail implements Action {
    readonly type = PostActionTypes.LoadPostDetail;
    constructor(public payload: number) {}
}

export class LoadPostDetailSuccess implements Action {
    readonly type = PostActionTypes.LoadPostDetailSuccess;
    constructor(public post: PostDetail, public answers: Answer[]) {}
}

export class LoadPostDetailFail implements Action {
    readonly type = PostActionTypes.LoadPostDetailFail;
    constructor(public payload: string) {}
}

export type PostActions = LoadPosts | LoadPostsSuccess | LoadPostsFail | LoadPostDetail | LoadPostDetailSuccess | LoadPostDetailFail;
