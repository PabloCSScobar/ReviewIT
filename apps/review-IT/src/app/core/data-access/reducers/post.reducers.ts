import { PostActions, PostActionTypes } from '../actions/post.actions';
import { initialState } from '../state/post.state';

export function postReducer(state = initialState, action: PostActions) {
  switch (action.type) {
    case PostActionTypes.LoadPosts:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.LoadPostsSuccess:
      return {
        ...state,
        loading: false,
        posts: action.payload.results,
        pagination: action.payload.pagination,
      };
    case PostActionTypes.LoadPostsFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.LoadPostDetail:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.LoadPostDetailSuccess:
      return {
        ...state,
        loading: false,
        selectedPost: action.post,
        answers: action.answers,
      };
    case PostActionTypes.LoadPostDetailFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.AddPost:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.AddPostSuccess:
      return {
        ...state,
        loading: false,
      };
    case PostActionTypes.AddPostFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.AddAnswer:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.AddAnswerSuccess:
      return {
        ...state,
        loading: false,
      };
    case PostActionTypes.AddAnswerFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.LoadPostCategories:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.LoadPostCategoriesSuccess:
      return {
        ...state,
        loading: false,
        postCategories: action.payload,
      };
    case PostActionTypes.LoadPostCategoriesFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.MarkAnswerAsTop:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.RemoveTopAnswer:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
