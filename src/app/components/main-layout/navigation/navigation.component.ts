import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, HeaderComponent, SidebarComponent],
  template: `
    <div class="container-wrapper">
      <app-header (toggleSidenav)="sidenav.toggle()"></app-header>
      <mat-sidenav-container autosize class="sidenav-container">
        <mat-sidenav #sidenav [opened]="true" mode="side" class="sidenav">
          <app-sidebar></app-sidebar>
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="content-wrapper">
            <div class="main-content-wrapper">
              <div class="main-content">
                <ng-content select="[main-content]"></ng-content>
              </div>
            </div>
            <div>
              <ng-content select="[rightnav-content]"></ng-content>
            </div>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
