import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rank',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item-rank mat-small">
      <span data-testid="item-rank" class="rank-label">
        {{ label }}: {{ rank }}
      </span>
      <span class="material-icons rank-icon"> star </span>
    </div>
  `,
  styles: [
    `
      .rank-icon {
        font-size: 12px;
        color: #f7ab1b;
        margin-bottom: 2px;
      }
      .item-rank {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    `,
  ],
})
export class StarRankComponent implements OnInit {
  @Input() rank!: number;
  @Input() label!: string;
  constructor() {}

  ngOnInit(): void {}
}
