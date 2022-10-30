import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div data-testid="post-tag" class="tag mat-small">{{ tag }}</div>
  `,
  styles: [
    `
      .tag {
        padding: 2px 4px;
        border-radius: 2px;
        background-color: var(--tag-background);
        color: var(--tag-foreground);
      }
    `,
  ],
})
export class TagComponent {
  @Input() tag!: string;
  constructor() {}
}
