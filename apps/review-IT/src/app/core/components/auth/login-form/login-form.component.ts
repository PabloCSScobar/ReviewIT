import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../permissions/services/auth.service';

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
    <form
      [formGroup]="loginForm"
      class="login-form theme-dark"
      (ngSubmit)="login()"
    >
      <mat-form-field appearance="outline">
        <input
          matInput
          name="username"
          placeholder="Username"
          required
          formControlName="username"
        />
      </mat-form-field>
      <mat-form-field appearance="outline">
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
      <button
        class="submit-button"
        mat-raised-button
        color="primary"
        type="submit"
      >
        Sign in
      </button>
      <p class="register-message">
        New on ReviewIT?
        <a class="register-link" [routerLink]="['/auth/register']"
          >Create an account</a
        >
      </p>
    </form>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        color: white;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
        justify-content: center;
        padding: 2em;
        margin: 1em;
        background-color: #161b22;
        border-radius: 10px;
      }
      .login-form mat-form-field,
      .login-form .submit-button {
        width: 100%;
      }
      .register-message {
        margin-top: 1em;
      }
      .register-link {
        text-decoration: none;
        color: #1976d2;
      }
    `,
  ],
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  hide = true;

  loginForm = this.fb.nonNullable.group({
    username: [''],
    password: [''],
  });

  login() {
    this.authService.login(this.loginForm.getRawValue());
  }
}
