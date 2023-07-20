import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LearnRoutingModule } from './learn-routing.module';
import { JsonComponent } from './json/json.component';
// import { LearnComponent } from './learn/learn.component'; 
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { SearchPipe } from './search.pipe';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';


@NgModule({
  declarations: [
    JsonComponent,
    // LearnComponent,
    ParentComponent,
    ChildComponent,
    LearnPipeComponent,
    SearchPipe,
    Subject1Component,
    Subject2Component,
    Subject3Component
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
