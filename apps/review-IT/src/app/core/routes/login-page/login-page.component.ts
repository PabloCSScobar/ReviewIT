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
      <div class="top-bar"></div>
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
      .content-wrapper {
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-rows: 30px 60px 1fr;
        grid-template-columns: 1fr;
        background-color: #0c111a;
      }
      .login-page {
        display: grid;
        grid-template-columns: 1fr minmax(500px, 45%);
      }
      .banner {
        display: flex;
        width: 100%;
        background-image: url('/assets/auth-background.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
      }
      .banner img {
        width: 100%;
        height: auto;
      }

      .header {
        display: flex;
        justify-content: center;
      }
      .logo-img {
        width: auto;
        height: 40px;
      }
      .form-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 1024px) {
        .login-page {
          grid-template-columns: 1fr;
        }
        .banner {
          display: none;
        }
      }
    `,
  ],
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
