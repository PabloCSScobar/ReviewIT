import { User } from './user';
import { ReviewedCategory } from './reviewed-category';

export type Answer = {
  id: number;
  created: string;
  description: string;
  isTopAnswer: boolean;
  rank: number;
  author: User;
  reviewedCategories: ReviewedCategory[];
};
