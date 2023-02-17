import { FormControl } from '@angular/forms';

export type ReviewCategoryNode = {
  id?: number;
  type: ReviewCategoryNodeType;
  description: string;
};
export type ReviewCategoryNodeType = 'con' | 'pro';

export type ReviewCategoryNodeCreateForm = {
  type: FormControl<ReviewCategoryNodeType>;
  description: FormControl<string>;
};
