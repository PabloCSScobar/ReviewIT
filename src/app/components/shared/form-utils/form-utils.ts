import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function castAbstractControlToFormGroup(control: AbstractControl) {
  return control as FormGroup;
}

export function castAbstractControlToFormArray(control: AbstractControl) {
  return control as FormArray;
}
