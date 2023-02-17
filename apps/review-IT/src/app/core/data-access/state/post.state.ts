import { Answer } from '../../models/answer.model';
import { PostCategory } from '../../models/post-category.model';
import { Post, PostDetail } from '../../models/post.model';

export type PostState = {
  posts: Post[];
  postCategories: PostCategory[];
  selectedPost: PostDetail | null;
  loading: boolean;
  error: string | null;
  answers: Answer[] | null;
};

export const initialState: PostState = {
  posts: [],
  postCategories: [],
  selectedPost: null,
  loading: false,
  error: null,
  answers: null,
};
