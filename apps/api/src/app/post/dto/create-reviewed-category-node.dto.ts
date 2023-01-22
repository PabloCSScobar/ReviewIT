import { CreateReviewedCategoryNode } from './create-reviewed-category.dto';

export class CreateReviewedCategory {
  category: number;
  rank: number;
  reviewCategoryNodes: CreateReviewedCategoryNode[];
}
