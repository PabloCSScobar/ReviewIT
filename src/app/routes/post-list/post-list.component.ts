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

@Component({
  selector: 'app-post-list-container',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    PostListComponent,
    PostSearchInputComponent,
    PostFiltersBarComponent,
  ],
  template: `
    <app-navigation>
      <div main-content>
        <app-post-search-input></app-post-search-input>
        <app-post-filters-bar></app-post-filters-bar>
        <app-post-list [posts]="(posts$ | async)!"></app-post-list>
      </div>
      <div rightnav-content>Rightnav content</div>
    </app-navigation>
  `,
  styles: [],
})
export class PostListContainerComponent implements AfterViewInit {
  posts = MOCK_POSTS;
  posts$!: Observable<Post[]>;
  @ViewChild(PostSearchInputComponent) searchInput!: PostSearchInputComponent;
  @ViewChild(PostFiltersBarComponent) filterInput!: PostFiltersBarComponent;
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.posts$ = combineLatest([
      this.searchInput.newSearch.pipe(startWith('')),
      this.filterInput.newFilter.pipe(startWith(PostsFilter.LATEST)),
    ]).pipe(
      switchMap((term, postFilter) => {
        console.log(term, postFilter);
        return of(this.posts); //todo api call;
      })
    );
    this.cd.detectChanges();
  }
}
