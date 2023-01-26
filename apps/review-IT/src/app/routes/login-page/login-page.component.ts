import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div class="login-page">
    <div class="banner"></div>
    <div class="content-wrapper">
      <div class="header">
        <img
          class="logo-img"
          src="assets/logo-small.png"
          alt="logo review it"
        />
      </div>
      <div class="form-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
  styles: [
    `
      .login-page {
        display: flex;
      }
      .banner {
        display: none;
        width: 100%;
        background-image: url('../../../assets/auth-background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
      }
      .content-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 100vh;
        background: #e91e63;
      }
      .header {
        display: flex;
        justify-content: center;
      }
      .logo-img {
        display: block;
        max-width: 90%;

        /* max-width:400px; */
        /* max-height:70px; */
        width: auto;
        height: auto;
      }
      .header-span {
        font-weight: 400;
        color: #1b313a;
      }
      .form {
        width: 100%;
        height: 100%;
      }

      @media screen and (min-width: 800px) {
        .banner {
          display: flex;
        }
      }
    `,
  ],
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
