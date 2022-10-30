import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { UserPanelComponent } from '../../user/user-panel/user-panel.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidemenuComponent,
    UserPanelComponent,
    MatDividerModule,
  ],
  template: `<div class="sidebar-main">
    <app-user-panel></app-user-panel>
    <mat-divider></mat-divider>
    <app-sidemenu></app-sidemenu>
  </div>`,
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
