import {
  Directive,
  inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectSelectedPost } from '../../core/data-access/selectors/post.selectors';
import { AppState } from '../../core/data-access/state/app.state';
import { PermissionsService } from '../services/permissions.service';

@Directive({
  selector: '[IsLoggedUserNotPostAuthor]',
  standalone: true,
})
export class IsLoggedUserNotPostAuthorDirective implements OnInit, OnDestroy {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private permissionService = inject(PermissionsService);
  private isDisplayed: boolean = false;
  private store = inject(Store<AppState>);
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    const post$ = this.store.pipe(select(selectSelectedPost));
    post$.pipe(takeUntil(this.destroy$)).subscribe((post) => {
      if (!post) return;
      if (this.permissionService.isPostAuthor(post.author)) {
        this.hide();
      } else {
        this.display();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private display() {
    if (!this.isDisplayed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isDisplayed = true;
    }
  }

  private hide() {
    if (this.isDisplayed) {
      this.viewContainer.clear();
      this.isDisplayed = false;
    }
  }
}
