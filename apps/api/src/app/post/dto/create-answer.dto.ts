import { CreateReviewedCategory } from './create-reviewed-category-node.dto';

export class CreateAnswerDto {
  description: string;
  reviewedCategories: CreateReviewedCategory[];
}
