import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule, TagComponent],
  template: `
    <div class="tags">
      <div *ngFor="let tag of tags"><app-tag [tag]="tag.name"></app-tag></div>
    </div>
  `,
  styles: [
    `
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        line-height: 18px;
        float: left;
      }
    `,
  ],
})
export class TagListComponent {
  @Input() tags!: { name: string }[];
  constructor() {}
}
