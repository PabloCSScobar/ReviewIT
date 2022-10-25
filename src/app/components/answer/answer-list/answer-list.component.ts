import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Answer } from '../models/answer';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerDetailComponent } from '../answer-detail/answer-detail.component';

@Component({
  selector: 'app-answer-list',
  standalone: true,
  imports: [CommonModule, MatDividerModule, AnswerDetailComponent],
  template: `
    <div class="answers-amount-header mat-h3">
      <div *ngIf="answers && answers.length > 0; else noAnswer">
        {{ answers.length }} Answer<ng-container *ngIf="answers.length > 1"
          >s</ng-container
        >
        <mat-divider></mat-divider>
      </div>
      <ng-template #noAnswer>No one has added an answer yet.</ng-template>
    </div>
    <ng-container *ngFor="let answer of answers">
      <app-answer-detail [answer]="answer"></app-answer-detail>
    </ng-container>
  `,
  styles: [
    `
      .answers-amount-header {
        margin: 2em;
      }
    `,
  ],
})
export class AnswerListComponent {
  @Input() answers!: Answer[];
  constructor() {}
}
