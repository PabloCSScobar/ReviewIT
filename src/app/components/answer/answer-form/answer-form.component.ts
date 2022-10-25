import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PostCategory } from '../../post/models/post-category';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PostDetail } from '../../post/models/post';
import { MatIconModule } from '@angular/material/icon';
import { AnswerFormCategoryComponent } from './answer-form-category/answer-form-category.component';
import { castAbstractControlToFormGroup } from '../../shared/form-utils/form-utils';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-answer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    AnswerFormCategoryComponent,
  ],
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
})
export class AnswerFormComponent {
  _post!: PostDetail;
  availableCategories!: PostCategory[];
  selectedCategories: PostCategory[] = [];
  @Input() set post(value: PostDetail) {
    this._post = value;
    this.availableCategories = value.categories;
  }

  constructor(private fb: FormBuilder) {}

  answerForm = this.fb.group({
    description: ['', Validators.required],
    reviewed_categories: this.fb.array([]),
  });

  submit() {
    this.answerForm.markAllAsTouched();
    // if (this.answerForm.valid)
    console.log(this.answerForm.value);
  }

  get reviewedCategories() {
    return this.answerForm.get('reviewed_categories') as FormArray;
  }

  addCategoryToReview(categoryId: number) {
    const reviewedCategory = this.fb.group({
      rank: [1, Validators.required],
      category: [categoryId, Validators.required],
      review_nodes: this.fb.array([
        this.fb.group({
          type: ['pro'],
          description: [''],
        }),
      ]),
    });
    this.reviewedCategories.push(reviewedCategory);
    this.removeAvailableCategory(categoryId);
    this.addSelectedCategory(categoryId);
  }

  removeCategory(categoryFormIndex: number, categoryId: number) {
    this.reviewedCategories.removeAt(categoryFormIndex);
    this.addAvailableCategory(categoryId);
    this.removeSelectedCategory(categoryId);
  }

  addSelectedCategory(categoryId: number) {
    this.selectedCategories.push(this.getCategoryFromId(categoryId));
  }

  removeSelectedCategory(categoryId: number) {
    this.selectedCategories = this.selectedCategories.filter(
      (item) => item.id !== categoryId
    );
  }

  removeAvailableCategory(categoryId: number) {
    this.availableCategories = this.availableCategories.filter(
      (item) => item.id !== categoryId
    );
  }

  addAvailableCategory(categoryId: number) {
    const category = this.getCategoryFromId(categoryId);
    this.availableCategories.push(category);
  }

  getCategoryFromId(categoryId: number) {
    return this._post.categories.filter((item) => item.id === categoryId)[0];
  }

  castToGroup(control: AbstractControl) {
    return castAbstractControlToFormGroup(control);
  }
}
