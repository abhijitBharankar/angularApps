import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { LearnComponent } from './learn/learn.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject3Component } from './subject3/subject3.component';
import { Subject2Component } from './subject2/subject2.component';

const routes: Routes = [
  {path:'learn', component:LearnComponent},
  {path:'json',component:JsonComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'pipe',component:LearnPipeComponent},
  {path: 'subject1',component:Subject1Component},
  {path: 'subject2',component:Subject2Component},
  {path: 'subject3',component:Subject3Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
