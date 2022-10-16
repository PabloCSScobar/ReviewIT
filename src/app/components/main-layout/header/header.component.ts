import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: ` <mat-toolbar class="main-header" color="primary">
    <button
      mat-icon-button
      (click)="toggleSidenav.emit()"
      class="matero-toolbar-button"
    >
      <mat-icon>menu</mat-icon>
    </button>
    Header
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
