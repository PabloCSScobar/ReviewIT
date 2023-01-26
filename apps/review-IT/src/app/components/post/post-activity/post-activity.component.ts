import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInlineInfoComponent } from '../../user/user-inline-info/user-inline-info.component';
import { PostUser } from '../../../models/post-user';
import { TimeAgoPipe } from '../../../pipes/time-ago.pipe';
@Component({
  selector: 'app-post-activity',
  standalone: true,
  imports: [TimeAgoPipe, CommonModule, UserInlineInfoComponent],
  template: `
    <div class="last-user-activity">
      <app-user-inline-info [user]="author"></app-user-inline-info>
      <span class="activity-type mat-small">created</span>
      <div class="activity-time mat-small">
        {{ created | timeAgo }}
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
export class PostActivityComponent {
  @Input() author: PostUser;
  @Input() created: string;
}
