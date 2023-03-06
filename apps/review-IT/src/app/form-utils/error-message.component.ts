import { NgIf, NgStyle } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MatFormFieldModule, NgIf, NgStyle],
  template: `
<ng-container *ngIf="control">
  {{ errorMessage }}
</ng-container>
<ng-container *ngIf="!control">
    <ng-content></ng-content>
</ng-container>
`
})
export class ErrorMessageComponent {
  private errorService = inject(ErrorMessageService);
  @Input() control: AbstractControl | null;

  get errorMessage(): string | null {
    return this.errorService.errorMessage(this.control);
  }
}