import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  name!: string;

  constructor(private ds: DataService){

  }

  ngOnInit(){
    this.ds.nameForSubject.subscribe(data=>{
      this.name = data
    })
  }
}
