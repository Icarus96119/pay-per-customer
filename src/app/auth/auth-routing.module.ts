import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';

import { ROUTES } from '../core/data/routes';

const routes: Routes = [
  { path: ROUTES.auth.login, component: LoginComponent },
  { path: ROUTES.auth.forgotPassword, component: ForgotPasswordComponent },
  { path: ROUTES.auth.register, component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
