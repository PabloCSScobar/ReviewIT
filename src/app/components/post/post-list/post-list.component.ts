import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <p *ngFor="let post of posts">{{ post | json }}</p> `,
  styles: [],
})
export class PostListComponent {
  @Input() posts!: any[];
  constructor() {}
}
