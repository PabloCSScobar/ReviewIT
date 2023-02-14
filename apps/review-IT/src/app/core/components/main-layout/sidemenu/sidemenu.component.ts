import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {IsLoggedDirective} from '../../../../permissions/directives/is-logged.directive';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, RouterModule, IsLoggedDirective],
  template: `<mat-nav-list>
    <div class="new-project-button-wrapper">
      <button *IsLogged [routerLink]="['/posts/new']" mat-raised-button color="primary">
        Add new project
      </button>
    </div>
    <a [routerLink]="['/posts']" mat-list-item> All projects </a>
  </mat-nav-list>`,
  styles: [
    `
      .new-project-button-wrapper {
        padding-left: 1em;
        margin-bottom: 0.5em;
      }
    `,
  ],
})
export class SidemenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
