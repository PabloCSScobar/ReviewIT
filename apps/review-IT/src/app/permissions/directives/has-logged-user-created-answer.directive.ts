import { Directive, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Answer } from "../../core/models/answer.model";

@Directive({
    selector: "[hasLoggedUserCreatedAnswer]",
    standalone: true
})
export class HasLoggedUserCreatedAnswerDirective {
    private templateRef = inject(TemplateRef);
    private viewContainer = inject(ViewContainerRef);
    private authService = inject(AuthService);
    private isDisplayed: boolean = false;

    @Input() set hasLoggedUserCreatedAnswer(answers: Answer[]) {
      const loggedUser = this.authService.currentUser
      const hasAnswer = answers.find(answer => answer.author.id === loggedUser?.id);
      if (!hasAnswer && !this.isDisplayed) {
        this.isDisplayed = true;
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.isDisplayed = false;
        this.viewContainer.clear();
      }
    }
}