import { AfterViewChecked, ChangeDetectorRef, Directive, inject, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "../../core/data-access/auth.service";

@Directive({
    selector: "[IsLogged]",
    standalone: true
})
export class IsLoggedDirective implements OnInit {
    private templateRef = inject(TemplateRef);
    private viewContainer = inject(ViewContainerRef);
    private authService = inject(AuthService);
    private cd = inject(ChangeDetectorRef);
    private isDisplayed: boolean = false;

    ngOnInit(): void {
        const isUserLogged = this.authService.isLogged();
        if (isUserLogged && !this.isDisplayed) {
          this.isDisplayed = true;
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.isDisplayed = false;
          this.viewContainer.clear();
        }
        this.cd.detectChanges();
  }
}