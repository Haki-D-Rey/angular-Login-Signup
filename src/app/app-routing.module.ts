import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';

const routes: Routes = [
  { redirectTo: '', path: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'singup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
