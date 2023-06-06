import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';

const routes: Routes = [
  {path : 'adminlogin', component : AdminSignInComponent},
  {path : 'adminsignup', component: AdminSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
