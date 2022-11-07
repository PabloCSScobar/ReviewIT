import { PostCategory } from '../../post/models/post-category';
import { ReviewCategoryNode } from '../../post/models/post-category-node';

export type ReviewedCategory = {
  id?: number;
  category: PostCategory;
  review_nodes: ReviewCategoryNode[];
  rank: number;
};
