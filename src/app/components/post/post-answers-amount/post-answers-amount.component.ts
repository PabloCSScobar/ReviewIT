import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-answers-amount',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="post-answers"
      [ngClass]="{
        'top-answer': hasTopAnswer === true,
        'no-answer': answers === 0
      }"
    >
      <span *ngIf="hasTopAnswer" class="material-icons top-answer-icon">
        done
      </span>
      <span data-testid="answers" class="answers-amount mat-small"
        >{{ answers }} answers</span
      >
    </div>
  `,
  styles: [
    `
      .post-answers {
        padding: 2px 5px;
        border: 1px solid #2a9d8f;
        border-radius: 3px;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .top-answer-icon {
        font-size: 14px;
        color: var(--fg);
      }
      .top-answer {
        background-color: #6abab1;
        color: black;
      }
      .no-answer {
        border: 1px solid black;
      }
    `,
  ],
})
export class PostAnswersAmountComponent implements OnInit {
  @Input() hasTopAnswer!: boolean;
  @Input() answers!: number;
  constructor() {}

  ngOnInit(): void {}
}
