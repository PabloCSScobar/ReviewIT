import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-inline-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-info-wrapper">
      <div class="avatar-wrapper">
        <img
          data-testid="avatar"
          class="user-avatar"
          [src]="user.avatarLink"
          alt="user avatar"
        />
      </div>
      <span data-testid="username" class="username mat-small"
        >{{ user.username }}
      </span>
      <span data-testid="reputation" class="user-reputation mat-small"
        >({{ user.reputation }})
      </span>
    </div>
  `,
  styles: [
    `
      .user-avatar {
        width: 16px;
        height: 16px;
        margin-bottom: -3px;
      }
      .user-info-wrapper {
        display: flex;
        align-items: center;
        gap: 3px;
      }
    `,
  ],
})
export class UserInlineInfoComponent implements OnInit {
  @Input() user!: User;
  constructor() {}

  ngOnInit(): void {}
}
