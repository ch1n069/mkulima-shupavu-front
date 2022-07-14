import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { FarmerComponent } from './farmer/farmer.component';
import { GuarantorFormComponent } from './guarantor-form/guarantor-form.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { InputsComponent } from './inputs/inputs.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AgentComponent } from './agent/agent.component';
// import { } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { SupplierComponent } from './supplier/supplier.component';
import { AuthGuard } from './guards/auth.guard';
import { FarmerGuard } from './guards/farmer.guard';

const routes: Routes = [

  { path:"" , redirectTo:"home", pathMatch:"full" },
  { path:"home", component:HomeComponent },
  { path:"login" ,canActivate:[LoginGuard] , component:LoginComponent },
  { path:"signup", canActivate:[LoginGuard], component:SignUpComponent },
  { path:"farmer",canActivate:[AuthGuard] , component:FarmerComponent },
  { path:"our-services", canActivate:[AuthGuard, LoginGuard], component:OurServicesComponent },
  { path:"agent", canActivate:[AuthGuard, LoginGuard],  component:AgentComponent },
  // { path:"loan", component:LoanFormComponent },
  { path:"loan", canActivate: [AuthGuard], component:LoanFormComponent },
  // { path:"guarantor", component:GuarantorFormComponent },
  { path:"guarantor", canActivate: [AuthGuard], component:GuarantorFormComponent },
  { path:"buyer", component:BuyerFormComponent },
  { path:"supplier", canActivate: [AuthGuard], component:SupplierFormComponent },
  { path:"supplierForm", component:SupplierFormComponent },
  // { path:"supplier", component:SupplierComponent },
  { path:"inputs", canActivate: [AuthGuard], component:InputsComponent },
  // { path:"inputs", component:InputsComponent },
  { path:"home", canActivate:[ LoginGuard], component:HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
