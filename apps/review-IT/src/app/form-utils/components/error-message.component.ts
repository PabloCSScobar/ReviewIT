import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

type ErrorMessages = {
  [key: string]:  string;
};

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MatFormFieldModule, NgIf, NgStyle],
  template: `
<ng-container *ngIf="control">
  <span class="error-msg">{{ errorMessage }}</span>
</ng-container>
<ng-container *ngIf="!control">
  <span
    class="error-msg"
    [ngStyle]="{ 'font-size.px': fontSize, 'padding.px': padding }"
  >
    <ng-content></ng-content>
  </span>
</ng-container>

`,
  styles: [`
.error-msg {
  color: red;
  display: inline-block;
  padding: 0;
  margin-top: 0;
  margin-bottom: 2px;
}
    `]
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null;
  @Input() fontSize: number = 11;
  @Input() padding: number = 0;


  get errorMessage(): string | null {
    if (!this.control) return null;
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.touched) {
        return this.getValidationMessage(
          key,
          this.control.errors[key]
        );
      }
    }
    return null;
  }

  private getValidationMessage(
    validator: keyof ErrorMessages,
    validatorValue: any = null
  ): string | null {
    const messages: ErrorMessages = {
      email: 'Please enter a valid email address',
      passwordStrength:
        'Password must contain at least 8 characters, including a lowercase/uppercase letter and a number',
      passwordMatch: 'Passwords do not match',
      required: 'This field is required',
      min: `Minimum value for this field is ${validatorValue?.min}`,
      max: `Maximum value for this field is ${validatorValue?.max}`,
      oneRequired: 'At least one field is required',
      minlength: `Minimum ${validatorValue?.requiredLength} characters are required`,
      maxlength: `Maximum ${validatorValue?.requiredLength} characters are allowed`,
      startsWith: `Field must start with the phrase ${validatorValue}`,
      digits: 'Only digits are allowed',
    };
    return messages[validator] ?? null;
  }

}