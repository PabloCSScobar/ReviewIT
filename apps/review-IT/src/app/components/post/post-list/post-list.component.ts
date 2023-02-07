import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListViewComponent } from '../post-list-view/post-list-view.component';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostListViewComponent],
  template: `
    <div *ngFor="let post of posts; trackBy: postTrackBy">
      <app-post-list-view [post]="post"></app-post-list-view>
    </div>
  `,
  styles: [],
})
export class PostListComponent {
  @Input() posts!: Post[];

  postTrackBy(index: number, post: Post) {
    return post.id;
  }
}
