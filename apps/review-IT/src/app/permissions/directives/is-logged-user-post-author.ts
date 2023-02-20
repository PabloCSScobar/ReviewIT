import {
  Directive,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectSelectedPost } from '../../core/data-access/selectors/post.selectors';
import { AppState } from '../../core/data-access/state/app.state';
import { User } from '../../core/models/user.model';
import { AuthService } from '../services/auth.service';
import { PermissionsService } from '../services/permissions.service';

@Directive({
  selector: '[IsLoggedUserPostAuthor]',
  standalone: true,
})
export class IsLoggedUserPostAuthorDirective implements OnInit, OnDestroy {
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
        this.display();
      } else {
        this.hide();
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