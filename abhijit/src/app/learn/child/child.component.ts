import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataFromParent: any
  @Output() dataFromChild = new EventEmitter<any>

  name: any

  setData(data:any){
    // console.log(data.target.value);
    this.dataFromChild.emit(data.target.value)
  }
}
