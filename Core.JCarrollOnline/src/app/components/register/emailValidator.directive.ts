import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[email]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const email = String(c.value);
    const regexp = new RegExp('\\S+@\\S+\\.\\S+');
    const isValid = regexp.test(email);
    const message = {
      'email': {
        'message': 'The given email is invalid'
      }
    };
    return isValid ? null : message;
  }
}




