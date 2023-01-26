import { PostCategory } from './post-category';
import { ReviewCategoryNode } from './post-category-node';

export type ReviewedCategory = {
  id?: number;
  category: PostCategory;
  reviewCategoryNodes: ReviewCategoryNode[];
  rank: number;
};
