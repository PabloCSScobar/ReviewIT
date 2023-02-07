import { Answer } from '../../models/answer.model';
import { Post, PostDetail } from '../../models/post.model';

export type PostState = {
    posts: Post[];
    selectedPost: PostDetail | null;
    loading: boolean;
    error: string | null;
    answers: Answer[] | null;
}

export const initialState: PostState = {
    posts: [],
    selectedPost: null,
    loading: false,
    error: null,
    answers: null
}