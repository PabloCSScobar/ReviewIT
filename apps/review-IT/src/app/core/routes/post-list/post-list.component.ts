import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostListComponent } from '../../components/post/post-list/post-list.component';
import { PostSearchInputComponent } from '../../components/post/post-search-input/post-search-input.component';
import { PostFiltersBarComponent } from '../../components/post/post-filters-bar/post-filters-bar.component';
import { PostsFilter } from '../../models/post-filters.model';
import { Post } from '../../models/post.model';
import {
  combineLatest,
  Observable,
  startWith,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { PostCategoryFiltersTabComponent } from '../../components/post/post-category-filters-tab/post-category-filters-tab.component';
import { AppState } from '../../data-access/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectPostList, selectPostPagination } from '../../data-access/selectors/post.selectors';
import { LoadPosts } from '../../data-access/actions/post.actions';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Pagination } from 'api-interfaces';

@Component({
  selector: 'app-post-list-container',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    NavigationComponent,
    PostListComponent,
    PostSearchInputComponent,
    PostFiltersBarComponent,
    PostCategoryFiltersTabComponent,
  ],
  template: `
    <app-navigation>
      <div main-content>
        <app-post-search-input></app-post-search-input>
        <app-post-filters-bar></app-post-filters-bar>
        <app-post-category-filters-tab></app-post-category-filters-tab>
        <app-post-list [posts]="(posts$ | async)!"></app-post-list>
        <mat-paginator
          *ngIf="pagination$ | async as pagination"
          [pageSize]="pagination.itemsPerPage"
          [length]="pagination.total"
          [pageIndex]="pagination.currentPage - 1"  
        ></mat-paginator>
      </div>
    </app-navigation>
  `,
})
export class PostListContainerComponent implements AfterViewInit, OnDestroy {
  private store = inject(Store<AppState>);
  posts$: Observable<Post[]> = this.store.pipe(select(selectPostList));
  pagination$: Observable<Pagination> = this.store.pipe(select(selectPostPagination));

  @ViewChild(PostSearchInputComponent) searchInput: PostSearchInputComponent;
  @ViewChild(PostFiltersBarComponent) filterInput: PostFiltersBarComponent;
  @ViewChild(PostCategoryFiltersTabComponent)
  categoryInput: PostCategoryFiltersTabComponent;
  private destroy$ = new Subject<boolean>();

  ngAfterViewInit(): void {
    combineLatest([
      this.searchInput.newSearch.pipe(startWith('')),
      this.filterInput.newFilter.pipe(startWith(PostsFilter.LATEST)),
      this.categoryInput.categoryChanged.pipe(startWith(null)),
    ])
      .pipe(
        tap(([searchedTerm, postFilter, categoryFilter]) =>
          this.store.dispatch(
            new LoadPosts({ searchedTerm, postFilter, categoryFilter, page: 1 })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
