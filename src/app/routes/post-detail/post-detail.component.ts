import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostDetailViewComponent } from '../../components/post/post-detail-view/post-detail-view.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, of } from 'rxjs';
import { PostDetail } from '../../components/post/models/post';
import { PostService } from '../../components/post/services/post.service';
import { AnswerListComponent } from '../../components/answer/answer-list/answer-list.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    PostDetailViewComponent,
    AnswerListComponent,
  ],
  template: ` <app-navigation>
    <div main-content>
      <app-post-detail-view [post]="post$ | async"></app-post-detail-view>
      <app-answer-list
        [answers]="(post$ | async)?.answers ?? []"
      ></app-answer-list>
    </div>
    <div rightnav-content>Rightnav content</div>
  </app-navigation>`,
  styles: [],
})
export class PostDetailComponent implements OnInit {
  post$!: Observable<PostDetail>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id')!)),
      switchMap((postId) => this.postService.getPostDetails(postId))
    );
  }
}
