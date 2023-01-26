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
            placeholder="Nazwa użytkownika"
            required
            formControlName="username"
          />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <input
            matInput
            name="password"
            placeholder="Hasło"
            [type]="hide ? 'password' : 'text'"
            required
            autocomplete="off"
            formControlName="password"
          />
          <mat-icon matSuffix (click)="hide = !hide">{{
            hide ? 'visibility_off' : 'visibility'
          }}</mat-icon>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit">Zaloguj</button>
        <p class="register-link">
          <a [routerLink]="['/auth/register']"
            >Nie masz jeszcze konta? Zarejestruj się!</a
          >
        </p>
      </form>
    </div>
  `,
  styles: [``],
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
