import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-post-category-filters-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  template: `
    <div class="categories-wrapper">
      <div class="category-row" *ngFor="let category of categories">
        <button
          [disableRipple]="true"
          (click)="toggleFIlter(category.name)"
          mat-mini-fab
          [matTooltip]="category.name"
          matTooltipPosition="below"
          [color]="selectedCategory == category.name ? 'primary' : 'basic'"
        >
          <mat-icon>{{ category.icon }}</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .categories-wrapper {
        padding: 1em 2em;
        display: flex;
        gap: 1em;
      }
    `,
  ],
})
export class PostCategoryFiltersTabComponent {
  categories = [
    { name: 'SEO', icon: 'manage_search' },
    { name: 'Accesibility', icon: 'wheelchair_pickup' },
    { name: 'RWD', icon: 'devices' },
    { name: 'Code Quality', icon: 'code' },
    { name: 'Design', icon: 'design_services' },
    { name: 'Performance', icon: 'speed' },
  ];
  selectedCategory: string | null = null;
  @Output() categoryChanged: EventEmitter<string | null> = new EventEmitter();

  toggleFIlter(category: string) {
    this.selectedCategory = category == this.selectedCategory ? null : category;
    this.categoryChanged.emit(this.selectedCategory);
  }
}
