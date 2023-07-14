import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnComponent } from '../learn/learn/learn.component';
import { LearnRoutingModule } from '../learn/learn-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { NumberOnlyDirective } from '../learn/number-only.directive';


@NgModule({
  declarations: [
    LearnComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LearnRoutingModule,
    HttpClientModule
  ],
  
  exports:[
    FormsModule,
    ReactiveFormsModule,
    LearnComponent,
    LearnRoutingModule,
    HttpClientModule,
    NumberOnlyDirective
  ]
})
export class SharedModule { }
