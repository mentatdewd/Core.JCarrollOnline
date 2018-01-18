import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[passwordConfirmation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidatorDirective, multi: true }]
})
export class PasswordConfirmationValidatorDirective implements Validator {

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
