import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post';
import { TagListComponent } from '../../tag/tag-list/tag-list.component';
import { StarRankComponent } from '../../star-rank/star-rank.component';
import { PostStatsComponent } from '../post-stats/post-stats.component';
import { PostAnswersAmountComponent } from '../post-answers-amount/post-answers-amount.component';
import { PostActivityComponent } from '../post-activity/post-activity.component';

@Component({
  selector: 'app-post-list-view',
  standalone: true,
  imports: [
    CommonModule,
    TagListComponent,
    StarRankComponent,
    PostStatsComponent,
    PostAnswersAmountComponent,
    PostActivityComponent,
  ],
  templateUrl: './post-list-view.component.html',
  styleUrls: ['./post-list-view.component.scss'],
})
export class PostListViewComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}

  ngOnInit(): void {}
}
