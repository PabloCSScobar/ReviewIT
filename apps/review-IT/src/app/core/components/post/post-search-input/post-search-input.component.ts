import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-post-search-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <div class="search-wrapper">
      <mat-form-field class="search" appearance="outline">
        <mat-label>Search...</mat-label>
        <input
          matInput
          [formControl]="searchTerm"
          data-testid="post-search-input"
        />
        <button mat-icon-button matPrefix data-testid="post-search-button">
          <mat-icon>search</mat-icon>
        </button>
        <button
          *ngIf="searchTerm.value"
          matSuffix
          mat-icon-button
          type="button"
          aria-label="Clear"
          data-testid="clear-search-input"
          (click)="searchTerm.setValue('')"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>
  `,
  styles: [
    `
      .search-wrapper {
        box-sizing: border-box;
        width: 100%;
        padding: 0.5em 2em;
      }
      .search {
        width: 100%;
        // margin-bottom: -25px;
      }
      ::ng-deep .search .mat-form-field-wrapper {
        padding-bottom: 0;
      }
    `,
  ],
})
export class PostSearchInputComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl('');
  destroy$ = new Subject();
  @Output() newSearch: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
      .subscribe((term) => {
        if (typeof term === 'string') this.newSearch.emit(term);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
