import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../../models/post';
import { TagListComponent } from '../../tag/tag-list/tag-list.component';
import { StarRankComponent } from '../../star-rank/star-rank.component';
import { PostStatsComponent } from '../post-stats/post-stats.component';
import { PostAnswersAmountComponent } from '../post-answers-amount/post-answers-amount.component';
import { PostActivityComponent } from '../post-activity/post-activity.component';
import { RouterModule } from '@angular/router';

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
    RouterModule,
  ],
  templateUrl: './post-list-view.component.html',
  styleUrls: ['./post-list-view.component.scss'],
})
export class PostListViewComponent {
  @Input() post!: Post;
}
