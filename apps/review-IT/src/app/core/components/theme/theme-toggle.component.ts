import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button mat-icon-button class="theme-button" (click)="changeTheme()">
      <mat-icon *ngIf="isDarkMode"> dark_mode </mat-icon>
      <mat-icon *ngIf="!isDarkMode"> light_mode </mat-icon>
    </button>
  `,
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  styles: [],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService) {}

  changeTheme(): void {
    const isCurrentDarkMode = this.themeService.isDarkMode();
    isCurrentDarkMode
      ? this.themeService.update('theme-light')
      : this.themeService.update('theme-dark');
    this.isDarkMode = !this.isDarkMode;
  }

  ngOnInit(): void {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
}
