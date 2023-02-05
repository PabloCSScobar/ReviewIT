import {
  AfterViewInit,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/main-layout/navigation/navigation.component';
import { PostListComponent } from '../../components/post/post-list/post-list.component';
import { PostSearchInputComponent } from '../../components/post/post-search-input/post-search-input.component';
import { PostFiltersBarComponent } from '../../components/post/post-filters-bar/post-filters-bar.component';
import { PostsFilter } from '../../models/post-filters';
import { Post } from '../../models/post';
import { combineLatest, Observable, startWith, switchMap } from 'rxjs';
import { PostCategoryFiltersTabComponent } from '../../components/post/post-category-filters-tab/post-category-filters-tab.component';
import { PostService } from '../../data-access/post.service';

@Component({
  selector: 'app-post-list-container',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    PostListComponent,
    PostSearchInputComponent,
    PostFiltersBarComponent,
    PostCategoryFiltersTabComponent
  ],
  template: `
    <app-navigation>
      <div main-content>
        <app-post-search-input></app-post-search-input>
        <app-post-filters-bar></app-post-filters-bar>
        <app-post-category-filters-tab></app-post-category-filters-tab>
        <app-post-list [posts]="(posts$ | async)!"></app-post-list>
      </div>
    </app-navigation>
  `,
})
export class PostListContainerComponent implements AfterViewInit {
  private postService = inject(PostService);
  posts$: Observable<Post[]>;

  @ViewChild(PostSearchInputComponent) searchInput: PostSearchInputComponent;
  @ViewChild(PostFiltersBarComponent) filterInput: PostFiltersBarComponent;
  @ViewChild(PostCategoryFiltersTabComponent)
  categoryInput: PostCategoryFiltersTabComponent;

  ngAfterViewInit(): void {
    this.posts$ = combineLatest([
      this.searchInput.newSearch.pipe(startWith('')),
      this.filterInput.newFilter.pipe(startWith(PostsFilter.LATEST)),
      this.categoryInput.categoryChanged.pipe(startWith(null)),
    ]).pipe(
      switchMap(([searchedTerm, postFilter, categoryFilter]) =>
        this.postService.getPosts(
          searchedTerm,
          postFilter,
          categoryFilter
        )
      )
    );
  }
}
