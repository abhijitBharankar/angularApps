import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {

  name = ""
  constructor(private ds: DataService){

  }

  ngOnInit(){
    this.ds.nameForSubject.subscribe(data=>{
      this.name = data
    })
  }
}
