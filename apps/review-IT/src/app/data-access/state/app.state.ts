import { RouterReducerState } from '@ngrx/router-store';
import { PostState, initialState as InitialPostState  } from './post.state';

export interface AppState {
    router?: RouterReducerState;
    post: PostState;
}

export const initialAppState: AppState = {
    post: InitialPostState
};

export function getInitialState(): AppState {
    return initialAppState;
}