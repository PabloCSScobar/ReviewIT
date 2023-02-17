import { RouterReducerState } from '@ngrx/router-store';
import { PostState, initialState as InitialPostState } from './post.state';

export interface AppState {
  router?: RouterReducerState;
  posts: PostState;
}

export const initialAppState: AppState = {
  posts: InitialPostState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
