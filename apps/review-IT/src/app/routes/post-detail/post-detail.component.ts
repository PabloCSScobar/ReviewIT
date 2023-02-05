import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostDetailViewComponent } from '../../components/post/post-detail-view/post-detail-view.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, of, shareReplay } from 'rxjs';
import { PostDetail } from '../../models/post';
import { PostService } from '../../data-access/post.service';
import { AnswerListComponent } from '../../components/answer/answer-list/answer-list.component';
import { AnswerFormComponent } from '../../components/answer/answer-form/answer-form.component';
import { AnswerService } from '../../data-access/answer.service';
import { Answer } from '../../models/answer';

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
      <ng-container *ngIf="answers$ | async as answers">
        <app-answer-list [answers]="answers"></app-answer-list>
      </ng-container>
      <app-answer-form [post]="post"></app-answer-form>
    </div>
  </app-navigation>`,
  styles: [],
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private answerService = inject(AnswerService);

  postId$ = this.route.paramMap.pipe(map((params) => +params.get('id')!));
  post$: Observable<PostDetail> = this.postId$.pipe(
    switchMap((postId) => this.postService.getPostDetails(postId)),
    shareReplay()
  );
  answers$: Observable<Answer[]> = this.postId$.pipe(
    switchMap((postId) => this.answerService.getAnswers(postId))
  );
}
