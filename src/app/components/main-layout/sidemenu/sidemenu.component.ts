import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `<mat-nav-list>
    <a mat-list-item href="#"> Item 1 </a>
    <a mat-list-item href="#"> Item 2 </a>
    <a mat-list-item href="#"> Item 3 </a>
    <a mat-list-item href="#"> Item 4 </a>
  </mat-nav-list>`,
  styles: [],
})
export class SidemenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
