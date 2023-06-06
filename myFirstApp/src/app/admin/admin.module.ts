import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';


@NgModule({
  declarations: [
    AdminSignUpComponent,
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
