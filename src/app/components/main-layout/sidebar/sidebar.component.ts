import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidemenuComponent],
  template: `<div class="sidebar-main"><app-sidemenu></app-sidemenu></div>`,
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
