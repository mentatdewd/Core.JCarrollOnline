import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ForaComponent } from './components/fora/fora.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppConfig } from './app.config';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { EmailValidatorDirective } from './components/register/EmailValidator.directive';
import { UserNameValidatorDirective } from './components/register/UserNameValidator.directive';
import { PasswordValidatorDirective } from './components/register/PasswordValidator.directive';
import { PasswordConfirmationValidatorDirective } from './components/register/passwordConfirmationValidator.directive';

import { ShowErrorsComponent } from './components/show-errors/show-errors.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        ForaComponent,
        ProfileComponent,
        AboutComponent,
        ContactComponent,
        SandboxComponent,
        BlogComponent,
        RegisterComponent,
        LoginComponent,
        ShowErrorsComponent,
        EmailValidatorDirective,
        UserNameValidatorDirective,
        PasswordValidatorDirective,
        PasswordConfirmationValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        HttpModule,
        MDBBootstrapModule.forRoot()
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
