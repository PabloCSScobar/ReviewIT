import { PostUser } from '../../post/models/post-user';
import { ReviewedCategory } from './reviewed-category';

export type Answer = {
  id: number;
  created: string;
  description: string;
  is_top_answer: boolean;
  rank: number;
  author: PostUser;
  reviewed_categories: ReviewedCategory[];
};
