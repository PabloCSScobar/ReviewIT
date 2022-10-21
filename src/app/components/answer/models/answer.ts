import { PostActivity } from '../../post/models/post-activity';
import { PostCategory } from '../../post/models/post-category';
import { ReviewedCategory } from './reviewed-category';

export type Answer = {
  id: number;
  created: string;
  description: string;
  is_top_answer: boolean;
  rank: number;
  author_last_activity: PostActivity;
  reviewed_categories: ReviewedCategory[];
};
