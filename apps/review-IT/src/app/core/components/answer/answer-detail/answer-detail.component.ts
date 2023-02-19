import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Answer } from '../../../models/answer.model';
import { PostActivityComponent } from '../../post/post-activity/post-activity.component';
import { StarRankComponent } from '../../star-rank/star-rank.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerReviewedCategoryComponent } from '../answer-reviewed-category/answer-reviewed-category.component';
import { IsLoggedUserPostAuthorDirective } from '../../../../permissions/directives/is-logged-user-post-author';

@Component({
  selector: 'app-answer-detail',
  standalone: true,
  imports: [
    CommonModule,
    PostActivityComponent,
    StarRankComponent,
    MatDividerModule,
    AnswerReviewedCategoryComponent,
    IsLoggedUserPostAuthorDirective,
  ],
  template: `<div *ngIf="answer" class="answer-wrapper">
    <mat-divider></mat-divider>
    <div class="top-answer-actions">
      <div *IsLoggedUserPostAuthor>
        <div *ngIf="!answer.isTopAnswer" class="set-top-answer">Set as Top Review</div>  
        <div *ngIf="answer.isTopAnswer" class="unset-top-answer">Change back Top Review</div>  
      </div>
    </div>
    <div class="answer-header">
      <app-star-rank [rank]="answer.rank" label="Overall rank"></app-star-rank>
      <div *ngIf="answer.isTopAnswer" class="top-answer">Top Review</div>
    </div>
    <div data-testid="answer-description" class="answer-description">
      {{ answer.description }}
    </div>
    <app-answer-reviewed-category
      *ngFor="let category of answer.reviewedCategories"
      [category]="category"
    ></app-answer-reviewed-category>
    <app-post-activity
      [author]="answer.author"
      [created]="answer.created"
    ></app-post-activity>
  </div>`,
  styles: [
    `
      .answer-wrapper {
        padding: 1em 2.3em;
      }

      .answer-wrapper .top-answer-actions {
        padding: 1em 0 0.5em 0;
        opacity: 0;
        transform: translateY(-100%);
        transition: opacity 0.05s ease-in-out, transform 0.1s ease-in-out;
      }
      .answer-wrapper:hover .top-answer-actions {
        opacity: 1;
        transform: translateY(0);
      }
      .answer-header {
        display: flex;
        align-items: center;
        gap: 1.4em;
      }

      .top-answer, .set-top-answer {
        width: fit-content;
        padding: 1px 7px;
        border: 1px solid var(--top-answer-color);
        border-radius: 3px;
        color: var(--top-answer-color);
      }
      .unset-top-answer { 
        width: fit-content;
        padding: 1px 7px;
        border: 1px solid var(--unset-top-answer-color);
        border-radius: 3px;
        color: rgb(245, 60, 122);
      }
      
      .answer-description {
        margin-top: 1em;
      }
    `,
  ],
})
export class AnswerDetailComponent {
  @Input() answer: Answer;
}
