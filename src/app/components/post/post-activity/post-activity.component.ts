import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostActivity } from '../models/post-activity';
import { UserInlineInfoComponent } from '../../user/user-inline-info/user-inline-info.component';

@Component({
  selector: 'app-post-activity',
  standalone: true,
  imports: [CommonModule, UserInlineInfoComponent],
  template: `
    <div class="last-user-activity">
      <app-user-inline-info [user]="activity.author"></app-user-inline-info>
      <span class="activity-type mat-small">{{ activity.type }}</span>
      <div class="activity-time mat-small">
        {{ activity.created }}
      </div>
    </div>
  `,
  styles: [
    `
      .last-user-activity {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 0;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      :host {
        margin-left: auto;
      }
    `,
  ],
})
export class PostActivityComponent implements OnInit {
  @Input() activity!: PostActivity;
  constructor() {}

  ngOnInit(): void {}
}
