import { Action } from '@ngrx/store';
import { Answer, AnswerCreate } from '../../models/answer.model';
import { Post, PostCreate, PostDetail } from '../../models/post.model';


export enum PostActionTypes {
    LoadPosts = '[Post] Load Posts',
    LoadPostsSuccess = '[Post] Load Posts Success',
    LoadPostsFail = '[Post] Load Posts Fail',
    LoadPostDetail = '[Post] Load Post Detail',
    LoadPostDetailSuccess = '[Post] Load Post Detail Success',
    LoadPostDetailFail = '[Post] Load Post Detail Fail',
    AddPost = '[Post] Add Post',
    AddPostSuccess = '[Post] Add Post Success',
    AddPostFail = '[Post] Add Post Fail',
    AddAnswer = '[Post] Add Answer',
    AddAnswerSuccess = '[Post] Add Answer Success',
    AddAnswerFail = '[Post] Add Answer Fail',
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

export class AddPost implements Action {
    readonly type = PostActionTypes.AddPost;
    constructor(public payload: PostCreate) {}
}

export class AddPostSuccess implements Action {
    readonly type = PostActionTypes.AddPostSuccess;
    constructor(public payload: Post) {}
}

export class AddPostFail implements Action {
    readonly type = PostActionTypes.AddPostFail;
    constructor(public payload: string) {}
}

export class AddAnswer implements Action {
    readonly type = PostActionTypes.AddAnswer;
    constructor(public payload: {postId: number, answer: AnswerCreate}) {}
}

export class AddAnswerSuccess implements Action {
    readonly type = PostActionTypes.AddAnswerSuccess;
    constructor(public payload: Answer) {}
}

export class AddAnswerFail implements Action {
    readonly type = PostActionTypes.AddAnswerFail;
    constructor(public payload: string) {}
}

export type PostActions = LoadPosts | LoadPostsSuccess | LoadPostsFail | LoadPostDetail | LoadPostDetailSuccess | LoadPostDetailFail | AddPost | AddPostSuccess | AddPostFail | AddAnswer | AddAnswerSuccess | AddAnswerFail;
