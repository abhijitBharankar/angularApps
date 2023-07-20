import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {

  name = "Abhijit"

  constructor(private ds : DataService){

  }
  sendData(){
    this.ds.nameForSubject.next(this.name)
  }
}
