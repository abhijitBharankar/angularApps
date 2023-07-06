import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LearnRoutingModule } from './learn-routing.module';
import { JsonComponent } from './json/json.component';
// import { LearnComponent } from './learn/learn.component'; 
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JsonComponent,
    // LearnComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    // LearnRoutingModule,
    // ReactiveFormsModule,
    // FormsModule,
    SharedModule
  ]
})
export class LearnModule { }
