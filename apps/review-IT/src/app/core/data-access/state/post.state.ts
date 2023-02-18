import { Pagination } from 'api-interfaces';
import { Answer } from '../../models/answer.model';
import { PostCategory } from '../../models/post-category.model';
import { Post, PostDetail } from '../../models/post.model';

export type PostState = {
  posts: Post[];
  pagination: Pagination;
  postCategories: PostCategory[];
  selectedPost: PostDetail | null;
  loading: boolean;
  error: string | null;
  answers: Answer[] | null;
};

export const initialState: PostState = {
  posts: [],
  pagination: {
    total: 0,
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0,
  },
  postCategories: [],
  selectedPost: null,
  loading: false,
  error: null,
  answers: null,
};
