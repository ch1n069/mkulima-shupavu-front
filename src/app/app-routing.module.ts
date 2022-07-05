import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {LoanFormComponent} from './loan-form/loan-form.component';

const routes: Routes = [
  {path:"" , redirectTo:"login", pathMatch:"full"},
  {path:"login" , component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"loanform", component:LoanFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
