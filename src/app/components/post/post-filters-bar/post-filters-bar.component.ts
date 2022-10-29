import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsFilter } from '../models/post-filters';

@Component({
  selector: 'app-post-filters-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="filter-list">
      <div
        [ngClass]="{ active: selectedFilter === filters.LATEST }"
        (click)="changeFilter(filters.LATEST)"
        class="filter-item"
        data-testid="filter-item-latest"
      >
        Latest
      </div>
      <div
        [ngClass]="{ active: selectedFilter === filters.HOT }"
        (click)="changeFilter(filters.HOT)"
        class="filter-item"
        data-testid="filter-item-hot"
      >
        Hot
      </div>
      <div
        [ngClass]="{ active: selectedFilter === filters.HIGHEST_RANK }"
        (click)="changeFilter(filters.HIGHEST_RANK)"
        class="filter-item"
        data-testid="filter-item-highest-rank"
      >
        Highest Rank
      </div>
      <div
        [ngClass]="{ active: selectedFilter === filters.MOST_VISITS }"
        (click)="changeFilter(filters.MOST_VISITS)"
        class="filter-item"
        data-testid="filter-item-most-visits"
      >
        Most visits
      </div>
      <div
        [ngClass]="{ active: selectedFilter === filters.MOST_ANSWERS }"
        (click)="changeFilter(filters.MOST_ANSWERS)"
        class="filter-item"
        data-testid="filter-item-most-answers"
      >
        Most answers
      </div>
      <div
        [ngClass]="{ active: selectedFilter === filters.NO_ANSWER }"
        (click)="changeFilter(filters.NO_ANSWER)"
        class="filter-item"
        data-testid="filter-item-no-answer"
      >
        No answer
      </div>
    </div>
  `,
  styles: [
    `
      .filter-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding-left: 2em;
      }
      .filter-item {
        padding: 2px 8px;
        cursor: pointer;
        border-radius: 5px;
      }
      .filter-item.active {
        background-color: #e1ecf4;
      }
    `,
  ],
})
export class PostFiltersBarComponent {
  filters = PostsFilter;
  selectedFilter: PostsFilter = PostsFilter.LATEST;
  @Output() newFilter: EventEmitter<PostsFilter> = new EventEmitter();
  constructor() {}

  changeFilter(filter: PostsFilter) {
    this.newFilter.next(filter);
    this.selectedFilter = filter;
  }
}
