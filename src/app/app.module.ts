import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FarmerComponent } from './farmer/farmer.component';
import { GuarantorFormComponent } from './guarantor-form/guarantor-form.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { InputsComponent } from './inputs/inputs.component';  


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    LoanFormComponent,
    FarmerComponent,
    GuarantorFormComponent,
    SupplierFormComponent,
    BuyerFormComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
