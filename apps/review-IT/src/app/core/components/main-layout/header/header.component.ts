import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { ThemeToggleComponent } from '../../theme/theme-toggle.component';
import { FlexSpacerComponent } from '../../shared/flex-spacer/flex-spacer.component';
import { LogoutButtonComponent } from '../../auth/logout-button/logout-button.component';
import { LoginButtonComponent } from '../../auth/login-button/login-button.component';
import { MatDividerModule } from '@angular/material/divider';
import { IsLoggedDirective } from '../../../../permissions/directives/is-logged.directive';
import { IsNotLoggedDirective } from '../../../../permissions/directives/is-not-logged.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LogoComponent,
    ThemeToggleComponent,
    FlexSpacerComponent,
    LogoutButtonComponent,
    LoginButtonComponent,
    MatDividerModule,
    IsLoggedDirective,
    IsNotLoggedDirective,
  ],
  template: ` <mat-toolbar class="main-header" color="primary">
    <div class="flex-row">
      <button
        mat-icon-button
        (click)="toggleSidenav.emit()"
        class="matero-toolbar-button"
        *ngIf="menuIconVisible"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <app-logo></app-logo>
      <app-flex-spacer></app-flex-spacer>
      <app-theme-toggle></app-theme-toggle>
      <mat-divider></mat-divider>
      <app-logout-button *IsLogged></app-logout-button>
      <app-login-button *IsNotLogged></app-login-button>
    </div>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuIconVisible!: boolean | null;
  @Output() toggleSidenav = new EventEmitter<void>();
}
