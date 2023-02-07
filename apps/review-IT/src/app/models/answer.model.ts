import { User } from './user.model';
import { ReviewedCategory, ReviewedCategoryCreate, ReviewedCategoryCreateForm } from './reviewed-category.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type Answer = {
  id: number;
  created: string;
  description: string;
  isTopAnswer: boolean;
  rank: number;
  author: User;
  reviewedCategories: ReviewedCategory[];
};

export type AnswerCreateForm = {
  description: FormControl<string>;
  reviewedCategories: FormArray<FormGroup<ReviewedCategoryCreateForm>>;
}

export type AnswerCreate = {
  description: string;
  reviewedCategories: ReviewedCategoryCreate[];
}