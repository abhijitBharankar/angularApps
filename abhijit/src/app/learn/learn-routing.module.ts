import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { LearnComponent } from './learn/learn.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path:'learn', component:LearnComponent},
  {path:'json',component:JsonComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
