import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
  ],
  template: `
    <div class="form-wrapper">
      <form [formGroup]="loginForm" class="login-form" (ngSubmit)="login()">
        <mat-form-field appearance="fill">
          <input
            matInput
            name="username"
            placeholder="Username"
            required
            formControlName="username"
          />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <input
            matInput
            name="password"
            placeholder="Password"
            [type]="hide ? 'password' : 'text'"
            required
            autocomplete="off"
            formControlName="password"
          />
          <mat-icon matSuffix (click)="hide = !hide">{{
            hide ? 'visibility_off' : 'visibility'
          }}</mat-icon>
        </mat-form-field>
        <button class="submit-button" mat-raised-button color="primary" type="submit">Sign in</button>
        <p class="register-link">
        New on ReviewIT?<a [routerLink]="['/auth/register']"
            >Create an account</a
          >
        </p>
      </form>
    </div>
  `,
  styles: [
    `
    .form-wrapper { 
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      justify-content: center;
    }
    .login-form mat-form-field, .login-form .submit-button {
      width: 100%;
    }
    .login-form mat-form-field {
    }

  `
  ],
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  hide = true;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  login() {
    console.log('login');
  }
}
