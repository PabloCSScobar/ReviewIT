import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="post-stats">
      <ng-content select="[post-rank]"></ng-content>
      <ng-content select="[post-visits]"></ng-content>
      <ng-content select="[post-answers-amount]"></ng-content>
      <ng-content select="[post-last-author-activity]"></ng-content>
    </div>
  `,
  styles: [
    `
      .post-stats {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
      }
    `,
  ],
})
export class PostStatsComponent {}
