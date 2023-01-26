import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { PostCategory } from '../../../../models/post-category';
import {
  castAbstractControlToFormArray,
  castAbstractControlToFormGroup,
} from '../../../shared/form-utils/form-utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AnswerFormCategoryNodeComponent } from '../answer-form-category-node/answer-form-category-node.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StarInputComponent } from '../../../star-input/star-input.component';

@Component({
  selector: 'app-answer-form-category',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    AnswerFormCategoryNodeComponent,
    StarInputComponent,
  ],
  templateUrl: './answer-form-category.component.html',
  styleUrls: ['./answer-form-category.component.scss'],
})
export class AnswerFormCategoryComponent {
  @Input() categoryForm!: FormGroup;
  @Input() category!: PostCategory;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  removeCategory() {
    this.remove.emit();
  }

  get reviewNodes() {
    return castAbstractControlToFormArray(
      this.categoryForm!.get('review_nodes')!
    );
  }

  addCategoryNodeToCategory() {
    const categoryNode = this.fb.group({
      type: ['pro', Validators.required],
      description: ['', Validators.minLength(5)],
    });
    this.reviewNodes.push(categoryNode);
  }

  removeCategoryNodeFromCategory(categoryNodeIndex: number) {
    this.reviewNodes.removeAt(categoryNodeIndex);
  }

  castToGroup(control: AbstractControl) {
    return castAbstractControlToFormGroup(control);
  }
}
