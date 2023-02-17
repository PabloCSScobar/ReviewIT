import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../permissions/services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <button
      (click)="logout()"
      mat-icon-button
      class="logout-button"
      aria-label="Logout button"
      data-testid="logout-button"
    >
      <mat-icon>logout</mat-icon>
    </button>
  `,
  styles: [],
})
export class LogoutButtonComponent {
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
