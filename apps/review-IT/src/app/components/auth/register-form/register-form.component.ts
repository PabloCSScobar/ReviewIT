import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterModule, MatIconModule],
  template: `
    <form
    [formGroup]="registerForm"
    class="register-form theme-dark"
  >
    <mat-form-field appearance="outline">
      <input
        matInput
        name="username"
        placeholder="Username"
        required
        autocomplete="off"
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
        hide ? "visibility_off" : "visibility"
      }}</mat-icon>
    </mat-form-field>
    <mat-form-field appearance="outline">
      <input
        matInput
        name="password"
        placeholder="Confirm password"
        [type]="hide ? 'password' : 'text'"
        required
        autocomplete="off"
        formControlName="confirm_password"
      />
      <mat-icon matSuffix (click)="hide = !hide">{{
        hide ? "visibility_off" : "visibility"
      }}</mat-icon>
    </mat-form-field>
    <button class="submit-button" type="submit" mat-raised-button color="primary">
      Create account
    </button>
    <p class="login-message">
    Already have an account? <a class="login-link" [routerLink]="['/auth/login']">Sign in</a>
    </p>
  </form>`,
  styles: [`
      :host {
      width: 100%;
      display: flex;
      justify-content:center;
      color: white;
    }
    .register-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      justify-content: center;
      padding: 2em;
      margin:1em;
      background-color: #161b22;
      border-radius: 10px;
    }  
    .register-form mat-form-field, .register-form .submit-button {
      width: 100%;
    }
    .login-message {
      margin-top: 1em;

    }
    .login-link {
      text-decoration: none;
      color: #1976d2;
    }

  `],
})
export class RegisterFormComponent {
  private fb = inject(FormBuilder);
  registerForm = this.fb.group({
    username: [''],
    password: [''],
    confirm_password: [''],
  });
  hide = true;
}
