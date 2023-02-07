import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCategoryNode } from '../../../models/post-category-node.model';

@Component({
  selector: 'app-answer-reviewed-category-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="node" class="node-wrapper">
      <div class="node-type-icon">
        <span
          *ngIf="node.type === 'pro'"
          data-testid="pro-node-icon"
          class="material-icons node-icon pro-node-icon"
        >
          add
        </span>
        <span
          *ngIf="node.type === 'con'"
          data-testid="con-node-icon"
          class="material-icons node-icon con-node-icon"
        >
          remove
        </span>
      </div>
      <div data-testid="node-description" class="node-description">
        {{ node.description }}
      </div>
    </div>
  `,
  styles: [
    `
      .pro-node-icon {
        color: var(--top-answer-color);
      }
      .con-node-icon {
        color: #f44336;
      }
      .node-icon {
        position: relative;
        bottom: 2px;
      }
      .node-wrapper {
        display: flex;
        gap: 0.5em;
        margin: 1em 0;
      }
      .node-description {
        font-size: 0.9rem;
      }
    `,
  ],
})
export class AnswerReviewedCategoryNodeComponent {
  @Input() node!: ReviewCategoryNode;
}
