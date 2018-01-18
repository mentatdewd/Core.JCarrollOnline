import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[password]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValid = String(c.value).length > 3;
    const message = {
      'minlength': {
        'message': 'First name must be greater than 3'
      }
    };
    return isValid ? null : message;
  }
}
