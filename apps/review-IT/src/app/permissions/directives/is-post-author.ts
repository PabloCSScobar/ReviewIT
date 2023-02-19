import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { User } from '../../core/models/user.model';
import { AuthService } from '../services/auth.service';
import { PermissionsService } from '../services/permissions.service';

@Directive({
  selector: '[IsPostAuthor]',
  standalone: true,
})
export class IsPostAuthorDirective {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private permissionService = inject(PermissionsService);
  private isDisplayed: boolean = false;

  @Input() set IsPostAuthor(postAuthor: User) {
    if (this.permissionService.isPostAuthor(postAuthor)) {
      this.display();
    } else {
      this.hide();
    }
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
