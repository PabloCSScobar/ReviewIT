import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post';
import { TagListComponent } from '../../tag/tag-list/tag-list.component';
import { StarRankComponent } from '../../shared/star-rank/star-rank.component';

@Component({
  selector: 'app-post-list-view',
  standalone: true,
  imports: [CommonModule, TagListComponent, StarRankComponent],
  templateUrl: './post-list-view.component.html',
  styleUrls: ['./post-list-view.component.scss'],
})
export class PostListViewComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}

  ngOnInit(): void {}
}
