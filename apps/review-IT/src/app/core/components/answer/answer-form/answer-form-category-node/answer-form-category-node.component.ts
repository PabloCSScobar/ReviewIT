import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from '../../../../../form-utils/components/error-message.component';

@Component({
  selector: 'app-answer-form-category-node',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ErrorMessageComponent
  ],
  templateUrl: './answer-form-category-node.component.html',
  styleUrls: ['./answer-form-category-node.component.scss'],
})
export class AnswerFormCategoryNodeComponent {
  @Input() categoryNodeForm!: FormGroup;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  removeCategoryNodeFromCategory() {
    this.remove.emit();
  }
}
