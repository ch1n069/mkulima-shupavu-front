import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {LoanFormComponent} from './loan-form/loan-form.component';
import {FarmerComponent} from './farmer/farmer.component';
import {GuarantorFormComponent} from './guarantor-form/guarantor-form.component';
import {BuyerFormComponent} from './buyer-form/buyer-form.component';
import {SupplierFormComponent} from './supplier-form/supplier-form.component';
import {InputsComponent} from './inputs/inputs.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AgentComponent } from './agent/agent.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  // {path:"login" , component:LoginComponent},
  // {path:"signup", component:SignUpComponent},
  // {path:"home", component:HomeComponent},
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"login" ,canActivate:[LoginGuard] , component:LoginComponent},
  {path:"signup", canActivate:[LoginGuard], component:SignUpComponent},
  {path:"home", canActivate:[AuthGuard, LoginGuard], component:HomeComponent},
  {path:"farmer",canActivate:[AuthGuard], component:FarmerComponent},
  {path:"our-services", canActivate:[AuthGuard, LoginGuard], component:OurServicesComponent},
  {path:"agent", canActivate:[AuthGuard, LoginGuard],  component:AgentComponent},
  {path:"loan", component:LoanFormComponent},
  {path:"guarantor", component:GuarantorFormComponent},
  {path:"buyer", component:BuyerFormComponent},
  {path:"supplier", component:SupplierFormComponent},
  {path:"inputs", component:InputsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
