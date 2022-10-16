import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flex-spacer',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [
    `
      :host {
        flex: 2;
      }
    `,
  ],
})
export class FlexSpacerComponent {}
