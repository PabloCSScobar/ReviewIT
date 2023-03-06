import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PostCategory } from '../../../models/post-category.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PostDetail } from '../../../models/post.model';
import { MatIconModule } from '@angular/material/icon';
import { AnswerFormCategoryComponent } from './answer-form-category/answer-form-category.component';
import { MatButtonModule } from '@angular/material/button';
import { AnswerCreate } from '../../../models/answer.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../data-access/state/app.state';
import { AddAnswer } from '../../../data-access/actions/post.actions';
import { ErrorMessageComponent } from '../../../../form-utils/error-message.component';

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
    ErrorMessageComponent
  ],
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
})
export class AnswerFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store<AppState>);

  _post: PostDetail;
  categoriesToReview: PostCategory[];
  availableCategories: PostCategory[];
  selectedCategories: PostCategory[] = [];
  answerForm = this.fb.nonNullable.group({
    description: ['', Validators.required],
    reviewedCategories: this.fb.array<FormGroup>([]),
  });

  @Input() set post(value: PostDetail) {
    this._post = value;
    this.categoriesToReview = [...value.categories];
    this.availableCategories = [...value.categories];
  }

  get reviewedCategories() {
    return this.answerForm.controls.reviewedCategories;
  }

  submit() {
    const answer: AnswerCreate = {
      description: this.answerForm.get('description')!.value,
      reviewedCategories: this.reviewedCategories.value,
    };
    this.store.dispatch(new AddAnswer({ answer, postId: this._post.id }));
  }

  addCategoryToReview(categoryId: number) {
    const reviewedCategory = this.fb.group({
      rank: [1, Validators.required],
      category: [categoryId, Validators.required],
      reviewCategoryNodes: this.fb.array([
        this.fb.group({
          type: ['pro'],
          description: ['', Validators.required],
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
    return this.categoriesToReview.filter((item) => item.id === categoryId)[0];
  }
}
