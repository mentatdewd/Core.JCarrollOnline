import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';

@Directive({
    selector: '[userName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UserNameValidatorDirective, multi: true }]
})

export class UserNameValidatorDirective implements Validator {
    debouncer: any;

    constructor(public userService: UserService) { }

    //validate(c: FormControl): ValidationErrors {
    //    const userName = String(c.value);

    //    const isValid = this.userService.userExists(userName);
    //    const message = {
    //        'minlength': {
    //            'message': 'First name must be greater than 3'
    //        }
    //    };

    //    return isValid ? null : message;
    //}

    validate(control: AbstractControl): Observable<ValidationErrors> {
        const userName = control.value;
        const message = {
            'minlength': {
                'message': 'First name must be greater than 3'
            }
        };

        const result = this.userService.userExists(userName);

        return result.map(result => (result ? { message } : null));
    }
}
