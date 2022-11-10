import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostListComponent } from '../../components/post/post-list/post-list.component';
import { PostSearchInputComponent } from '../../components/post/post-search-input/post-search-input.component';
import { PostFiltersBarComponent } from '../../components/post/post-filters-bar/post-filters-bar.component';
import { PostsFilter } from '../../components/post/models/post-filters';
import { MOCK_POSTS } from '../../components/post/models/posts_mock';
import { Post } from '../../components/post/models/post';
import { combineLatest, Observable, of, startWith, switchMap } from 'rxjs';
import { PostCategoryFiltersTabComponent } from '../../components/post/post-category-filters-tab/post-category-filters-tab.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PostService } from '../../components/post/services/post.service';

@Component({
  selector: 'app-post-list-container',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    PostListComponent,
    PostSearchInputComponent,
    PostFiltersBarComponent,
    PostCategoryFiltersTabComponent,
    MatPaginatorModule,
  ],
  template: `
    <app-navigation>
      <div main-content>
        <app-post-search-input></app-post-search-input>
        <app-post-filters-bar></app-post-filters-bar>
        <app-post-category-filters-tab></app-post-category-filters-tab>
        <app-post-list [posts]="(posts$ | async)!"></app-post-list>
        <mat-paginator
          class="posts-paginator"
          [length]="100"
          [pageSize]="10"
          aria-label="Select page"
        >
        </mat-paginator>
      </div>
    </app-navigation>
  `,
  styles: [],
})
export class PostListContainerComponent implements AfterViewInit {
  posts = MOCK_POSTS;
  posts$!: Observable<Post[]>;
  @ViewChild(MatPaginator) pagination!: MatPaginator;
  @ViewChild(PostSearchInputComponent) searchInput!: PostSearchInputComponent;
  @ViewChild(PostFiltersBarComponent) filterInput!: PostFiltersBarComponent;
  @ViewChild(PostCategoryFiltersTabComponent)
  categoryInput!: PostCategoryFiltersTabComponent;

  initPaginationEvent = {
    previousPageIndex: 0,
    pageIndex: 1,
    pageSize: 10,
    length: 100,
  };
  constructor(
    private cd: ChangeDetectorRef,
    private postService: PostService
  ) {}

  ngAfterViewInit(): void {
    this.posts$ = combineLatest([
      this.pagination.page.pipe(startWith(this.initPaginationEvent)),
      this.searchInput.newSearch.pipe(startWith('')),
      this.filterInput.newFilter.pipe(startWith(PostsFilter.LATEST)),
      this.categoryInput.categoryChanged.pipe(startWith(null)),
    ]).pipe(
      switchMap(([pagEvent, searchedTerm, postFilter, categoryFilter]) =>
        this.postService.getPosts(
          pagEvent.pageIndex,
          searchedTerm,
          postFilter,
          categoryFilter
        )
      )
    );
    this.cd.detectChanges();
  }
}
