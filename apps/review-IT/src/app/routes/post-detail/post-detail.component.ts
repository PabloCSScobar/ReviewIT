import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostDetailViewComponent } from '../../components/post/post-detail-view/post-detail-view.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, of, shareReplay, tap, Subject, takeUntil } from 'rxjs';
import { PostDetail } from '../../models/post';
import { PostService } from '../../data-access/services/post.service';
import { AnswerService } from '../../data-access/services/answer.service';
import { AnswerListComponent } from '../../components/answer/answer-list/answer-list.component';
import { AnswerFormComponent } from '../../components/answer/answer-form/answer-form.component';
import { Answer } from '../../models/answer';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../data-access/state/app.state';
import { selectAnswers, selectSelectedPost } from '../../data-access/selectors/post.selectors';
import { LoadPostDetail } from '../../data-access/actions/post.actions';

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
export class PostDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store<AppState>);
  private destroy$ = new Subject<boolean>();

  post$ = this.store.pipe(select(selectSelectedPost));
  answers$ = this.store.pipe(select(selectAnswers));
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params) => +params.get('id')!),
      tap((id) => this.store.dispatch(new LoadPostDetail(id))),
      takeUntil(this.destroy$)
      ).subscribe();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
