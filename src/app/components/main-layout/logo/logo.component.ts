import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-wrapper">
      <a>
        <h1 class="logo">
          <img
            class="logo-img"
            src="assets/logo-small.png"
            alt="text Review.IT. Star is displayed to represent a dot"
          />
        </h1>
      </a>
    </div>
  `,
  styles: [
    `
      .logo-wrapper {
        padding: 0 2px;
      }
      .logo-wrapper a {
        text-decoration: none;
      }
      .logo-img {
        width: 150px;
      }
      .logo {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
