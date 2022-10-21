import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewedCategory } from '../models/reviewed-category';
import { StarRankComponent } from '../../shared/star-rank/star-rank.component';
import { AnswerReviewedCategoryNodeComponent } from '../answer-reviewed-category-node/answer-reviewed-category-node.component';

@Component({
  selector: 'app-answer-reviewed-category',
  standalone: true,
  imports: [
    CommonModule,
    StarRankComponent,
    AnswerReviewedCategoryNodeComponent,
  ],
  template: `
    <div *ngIf="category" class="wrapper">
      <div class="category-header">
        <app-star-rank
          [rank]="category.rank"
          [label]="category.category.name"
        ></app-star-rank>
      </div>
      <ng-container *ngFor="let node of category.review_nodes">
        <app-answer-reviewed-category-node
          [node]="node"
        ></app-answer-reviewed-category-node>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .wrapper {
        margin-top: 10px;
      }
    `,
  ],
})
export class AnswerReviewedCategoryComponent {
  @Input() category!: ReviewedCategory;
  constructor() {}
}
