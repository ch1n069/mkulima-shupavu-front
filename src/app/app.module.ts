import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FarmerComponent } from './farmer/farmer.component';
import { ServicesComponent } from './services/services.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AgentComponent } from './agent/agent.component';  


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    FarmerComponent,
    ServicesComponent,
    OurServicesComponent,
    AgentComponent,
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
