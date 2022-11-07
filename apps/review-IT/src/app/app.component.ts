import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  title = 'review-IT';
}
