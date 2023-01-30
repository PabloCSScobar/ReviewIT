import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GITHUB_ICON } from '../assets/icons';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
    constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconLiteral(
      'github',
      sanitizer.bypassSecurityTrustHtml(GITHUB_ICON)
    );
  }

}
