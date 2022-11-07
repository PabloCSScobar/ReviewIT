import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, HeaderComponent, SidebarComponent],
  template: `
    <div class="container-wrapper">
      <app-header
        [menuIconVisible]="isHandset$ | async"
        (toggleSidenav)="sidenav.toggle()"
      ></app-header>
      <mat-sidenav-container autosize class="sidenav-container">
        <mat-sidenav
          #sidenav
          class="sidenav"
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false"
        >
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
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
