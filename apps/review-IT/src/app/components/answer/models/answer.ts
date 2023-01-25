import { PostUser } from '../../post/models/post-user';
import { ReviewedCategory } from './reviewed-category';

export type Answer = {
  id: number;
  created: string;
  description: string;
  isTopAnswer: boolean;
  rank: number;
  author: PostUser;
  reviewedCategories: ReviewedCategory[];
};
