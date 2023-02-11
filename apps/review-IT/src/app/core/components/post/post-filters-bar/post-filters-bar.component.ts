import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsFilter } from '../../../models/post-filters.model';

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
  styleUrls: ['./post-filters-bar.component.scss'],
})
export class PostFiltersBarComponent {
  filters = PostsFilter;
  selectedFilter: PostsFilter = PostsFilter.LATEST;
  @Output() newFilter: EventEmitter<PostsFilter> = new EventEmitter();

  changeFilter(filter: PostsFilter) {
    this.newFilter.next(filter);
    this.selectedFilter = filter;
  }
}
