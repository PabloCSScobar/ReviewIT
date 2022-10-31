import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { ThemeToggleComponent } from '../../theme/theme-toggle.component';
import { FlexSpacerComponent } from '../../shared/flex-spacer/flex-spacer.component';

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
    </div>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menuIconVisible!: boolean | null;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
