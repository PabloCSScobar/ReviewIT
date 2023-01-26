import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetail } from '../../../models/post';
import { StarRankComponent } from '../../star-rank/star-rank.component';
import { TagListComponent } from '../../tag/tag-list/tag-list.component';
import { PostActivityComponent } from '../post-activity/post-activity.component';
import { PostAnswersAmountComponent } from '../post-answers-amount/post-answers-amount.component';
import { PostStatsComponent } from '../post-stats/post-stats.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-post-detail-view',
  standalone: true,
  imports: [
    CommonModule,
    TagListComponent,
    StarRankComponent,
    PostStatsComponent,
    PostAnswersAmountComponent,
    PostActivityComponent,
    MatDividerModule,
  ],
  templateUrl: './post-detail-view.component.html',
  styleUrls: ['./post-detail-view.component.scss'],
})
export class PostDetailViewComponent {
  @Input() post!: PostDetail;
}
