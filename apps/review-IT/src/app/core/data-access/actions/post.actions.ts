import { Action } from '@ngrx/store';
import { PaginateResponse } from 'api-interfaces';
import { Answer, AnswerCreate } from '../../models/answer.model';
import { PostCategory } from '../../models/post-category.model';
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
  MarkAnswerAsTop = '[Post] Mark Answer As Top',
  RemoveTopAnswer = '[Post] Remove Top Answer',
  LoadPostCategories = '[Post] Load Post Categories',
  LoadPostCategoriesSuccess = '[Post] Load Post Categories Success',
  LoadPostCategoriesFail = '[Post] Load Post Categories Fail',
}

export class LoadPosts implements Action {
  readonly type = PostActionTypes.LoadPosts;
  constructor(
    public payload: {
      searchedTerm: string;
      postFilter: string;
      categoryFilter: string | null;
      page: number;
    }
  ) {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LoadPostsSuccess;
  constructor(public payload: PaginateResponse<Post>) {}
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
  constructor(public payload: { postId: number; answer: AnswerCreate }) {}
}

export class AddAnswerSuccess implements Action {
  readonly type = PostActionTypes.AddAnswerSuccess;
}

export class AddAnswerFail implements Action {
  readonly type = PostActionTypes.AddAnswerFail;
  constructor(public payload: string) {}
}

export class LoadPostCategories implements Action {
  readonly type = PostActionTypes.LoadPostCategories;
}

export class LoadPostCategoriesSuccess implements Action {
  readonly type = PostActionTypes.LoadPostCategoriesSuccess;
  constructor(public payload: PostCategory[]) {}
}

export class LoadPostCategoriesFail implements Action {
  readonly type = PostActionTypes.LoadPostCategoriesFail;
  constructor(public payload: string) {}
}

export class MarkAnswerAsTop implements Action {
  readonly type = PostActionTypes.MarkAnswerAsTop;
  constructor(public payload: number) {}
}

export class RemoveTopAnswer implements Action {
  readonly type = PostActionTypes.RemoveTopAnswer;
  constructor(public payload: number) {}
}

export type PostActions =
  | LoadPosts
  | LoadPostsSuccess
  | LoadPostsFail
  | LoadPostDetail
  | LoadPostDetailSuccess
  | LoadPostDetailFail
  | AddPost
  | AddPostSuccess
  | AddPostFail
  | AddAnswer
  | AddAnswerSuccess
  | AddAnswerFail
  | LoadPostCategories
  | LoadPostCategoriesSuccess
  | LoadPostCategoriesFail
  | MarkAnswerAsTop
  | RemoveTopAnswer;
