import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <button
      routerLink="/auth/login"
      mat-icon-button
      class="login-button"
      aria-label="login button"
      data-testid="login-button"
    >
    <mat-icon>login</mat-icon>
    </button>
  `,
})
export class LoginButtonComponent {
}
