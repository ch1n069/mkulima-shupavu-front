import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component'
import {HomeComponent} from './home/home.component'
import { FarmerComponent } from './farmer/farmer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AgentComponent } from './agent/agent.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"login" ,canActivate:[LoginGuard] , component:LoginComponent},
  {path:"signup", canActivate:[LoginGuard], component:SignUpComponent},
  {path:"home", canActivate:[ LoginGuard], component:HomeComponent},
  {path:"farmer",canActivate:[AuthGuard], component:FarmerComponent},
  {path:"our-services", canActivate:[AuthGuard, LoginGuard], component:OurServicesComponent},
  {path:"agent", canActivate:[AuthGuard, LoginGuard],  component:AgentComponent},
  {path:"supplier", component:SupplierComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
