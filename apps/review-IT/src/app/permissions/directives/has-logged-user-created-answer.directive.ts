import { Directive, EmbeddedViewRef, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Answer } from "../../core/models/answer.model";
import { User } from "../../core/models/user.model";

@Directive({
    selector: "[hasLoggedUserCreatedAnswer]",
    standalone: true
})
export class HasLoggedUserCreatedAnswerDirective {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);
  private hasAnswer: boolean = false;
  private loggedUser: User | null = null;

  private _elseTemplateRef: TemplateRef<any>|null = null;
  private _elseViewRef: EmbeddedViewRef<any>|null = null;
  
  private _notLoggedTemplateRef: TemplateRef<any>|null = null;
  private _notLoggedViewRef: EmbeddedViewRef<any>|null = null;


    @Input() set hasLoggedUserCreatedAnswer(answers: Answer[]) {
      this.loggedUser = this.authService.currentUser
      this.hasAnswer = answers.some(answer => answer.author.id === this.loggedUser?.id);
      this._updateView();
    }

    @Input() set hasLoggedUserCreatedAnswerElse(templateRef: TemplateRef<any>) {
      this._elseTemplateRef = templateRef;
      this._elseViewRef = null;
      this._updateView();
    }

    @Input() set hasLoggedUserCreatedAnswerNotLogged(templateRef: TemplateRef<any>) {
      this._notLoggedTemplateRef = templateRef;
      this._notLoggedViewRef = null;
      this._updateView();
    }

    private _updateView() {
      this.viewContainer.clear();
      if(this.hasAnswer) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (this.loggedUser) {
        if(this._elseTemplateRef) {
          this.viewContainer.createEmbeddedView(this._elseTemplateRef);
        }
      } else {
        if(this._notLoggedTemplateRef) {
          this.viewContainer.createEmbeddedView(this._notLoggedTemplateRef);
        }
      }
    }
}