import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="wrapper">
      <span
        class="star-wrapper"
        *ngFor="let star of stars; let i = index"
        (click)="value = i + 1"
      >
        <ng-container *ngIf="star; else noStar">
          <span
            data-testid="filled-icon"
            class="material-icons filled-star star"
          >
            star
          </span>
        </ng-container>
        <ng-template #noStar>
          <span data-testid="empty-icon" class="material-icons star">
            star
          </span></ng-template
        >
      </span>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5px;
      }
      .star-wrapper {
        cursor: pointer;
      }
      .star {
        font-size: 14px;
      }
      .filled-star {
        color: #f7ab1b;
      }
    `,
  ],
})
export class StarInputComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouch: any = () => {};
  val!: number;

  stars: boolean[] = Array(5).fill(false);

  set value(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    this.val = rating;
    this.onChange(rating);
    this.onTouch(rating);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
