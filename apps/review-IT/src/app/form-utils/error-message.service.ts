import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

type ErrorMessages = {
  [key: string]:  string;
};

@Injectable({
  providedIn: "root"
})
export class ErrorMessageService {
  errorMessage(control: AbstractControl | null): string | null {
    if (!control) return null;
    for (const key in control.errors) {
      if (control.errors.hasOwnProperty(key) && control.touched) {
        return this.getValidationMessage(
          key,
          control.errors[key]
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
