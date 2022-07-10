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

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"login" , component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"loan", component:LoanFormComponent},
  {path:"farmer", component:FarmerComponent},
  {path:"guarantor", component:GuarantorFormComponent},
  {path:"buyer", component:BuyerFormComponent},
  {path:"supplier", component:SupplierFormComponent},
  {path:"inputs", component:InputsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
