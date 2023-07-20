import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subject2Component } from '../subject2/subject2.component';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {

  @ViewChild('heading') heading!: ElementRef

  @ViewChild(Subject2Component) subject2Compo! : Subject2Component
  name = "Abhijit"
  surname = ""
  constructor(private ds : DataService){

  }
  sendData(){
    this.ds.nameForSubject.next(this.name)
  }

  ngAfterViewInit(){
  this.heading.nativeElement.innerHTML = 'abhijit';  
  
  this.surname = this.subject2Compo.surnameOnSubject2

  
  }
}
