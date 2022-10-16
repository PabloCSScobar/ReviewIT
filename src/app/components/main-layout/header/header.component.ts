import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { ThemeToggleComponent } from '../../theme/theme-toggle.component';

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
  ],
  template: ` <mat-toolbar class="main-header" color="primary">
    <button
      mat-icon-button
      (click)="toggleSidenav.emit()"
      class="matero-toolbar-button"
    >
      <mat-icon>menu</mat-icon>
    </button>
    <app-logo></app-logo>
    <app-theme-toggle></app-theme-toggle>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
