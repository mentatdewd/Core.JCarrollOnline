// show-errors.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
   <ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
   </ul>
 `,
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'email':(params) => 'The email is invalid',
    'passwordMatch': (params) => "Passwords don't match",
    'passwordRequireDigit':(params) => "Password must have at least one digit",
    'passwordRequireLowercase':(params) => "Password must have at least one lower case letter",
    'passwordRequireUppercase':(params) => "Password must have at least one upper case letter",
    'passwordRequireNonLetterOrDigit':(params) => "Password must have at least special character",
    'passwordRequiredLength': (params) => "Password must be at least 7 characters long",
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'uniqueName': (params) => params.message,
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
