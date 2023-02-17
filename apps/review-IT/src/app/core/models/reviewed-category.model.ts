import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PostCategory } from './post-category.model';
import {
  ReviewCategoryNode,
  ReviewCategoryNodeCreateForm,
} from './post-category-node.model';

export type ReviewedCategory = {
  id?: number;
  category: PostCategory;
  reviewCategoryNodes: ReviewCategoryNode[];
  rank: number;
};

export type ReviewedCategoryCreate = {
  category: number;
  rank: number;
  reviewCategoryNodes: Omit<ReviewCategoryNode, 'id'>[];
};

export type ReviewedCategoryCreateForm = {
  category: FormControl<number>;
  rank: FormControl<number>;
  reviewCategoryNodes: FormArray<FormGroup<ReviewCategoryNodeCreateForm>>;
};
