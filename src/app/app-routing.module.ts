import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'shop', loadChildren : ()=> import('./shop/shop.module').then(m=>m.ShopModule)  },
  {path: 'atm', loadChildren: ()=> import('./atm/atm.module').then(m=>m.AtmModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
