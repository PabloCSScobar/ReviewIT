import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PostUser } from '../../post/models/post-user';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="user-panel">
      <img
        class="user-panel-avatar"
        [src]="user.avatarLink"
        alt="avatar"
        width="64"
      />
      <h4 class="user-panel-name">
        {{ user.username }}
        <span class="mat-caption">({{ user.reputation }})</span>
      </h4>
      <div class="user-panel-icons">
        <a routerLink="/profile/overview" mat-icon-button>
          <mat-icon class="icon-18">account_circle</mat-icon>
        </a>
        <a routerLink="/profile/settings" mat-icon-button>
          <mat-icon class="icon-18">settings</mat-icon>
        </a>
        <a mat-icon-button>
          <mat-icon class="icon-18">exit_to_app</mat-icon>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .user-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
      }
      .user-panel-avatar {
        width: 64px;
        height: 64px;
        margin-bottom: 8px;
        border-radius: 50rem;
      }

      .user-panel-name {
        display: flex;
        align-items: center;
        gap: 3px;
        margin-top: 0;
        margin-bottom: 8px;
        font-weight: normal;
      }

      .user-panel-name,
      .user-panel-email,
      .user-panel-icons {
        opacity: 1;
      }

      .user-panel-icons {
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 3px;

        .mat-icon-button {
          width: 24px;
          height: 24px;
          line-height: 24px;
        }
      }
    `,
  ],
})
export class UserPanelComponent implements OnInit {
  user: PostUser = {
    id: 1,
    username: 'Jan Kowalski',
    reputation: 1200,
    avatarLink:
      'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow',
  };
  constructor() {}

  ngOnInit(): void {}
}
