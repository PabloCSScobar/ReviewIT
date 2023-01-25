import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostDetailViewComponent } from '../../components/post/post-detail-view/post-detail-view.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, of } from 'rxjs';
import { PostDetail } from '../../components/post/models/post';
import { PostService } from '../../components/post/services/post.service';
import { AnswerListComponent } from '../../components/answer/answer-list/answer-list.component';
import { AnswerFormComponent } from '../../components/answer/answer-form/answer-form.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    PostDetailViewComponent,
    AnswerListComponent,
    AnswerFormComponent,
  ],
  template: ` <app-navigation>
    <div main-content *ngIf="post$ | async as post">
      <app-post-detail-view [post]="post"></app-post-detail-view>
      <app-answer-list [answers]="post.answers"></app-answer-list>
      <app-answer-form [post]="post"></app-answer-form>
    </div>
  </app-navigation>`,
  styles: [],
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  post$: Observable<PostDetail> = this.route.paramMap.pipe(
    map((params) => +params.get('id')!),
    switchMap((postId) => this.postService.getPostDetails(postId))
  );
}
