import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { PostState } from '../state/post.state';

export const selectPosts = (state: AppState) => state.posts;

export const selectPostList = createSelector(
    selectPosts,
    (state: PostState) => state.posts
);

export const selectSelectedPost = createSelector(
    selectPosts,
    (state: PostState) => state.selectedPost
);

export const selectAnswers = createSelector(
    selectPosts,
    (state: PostState) => state.answers
);

export const selectPostCategories = createSelector(
    selectPosts,
    (state: PostState) => state.postCategories
);