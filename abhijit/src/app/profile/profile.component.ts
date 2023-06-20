import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder,Validator } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
success!: boolean;
constructor(private ds : DataService, private fb: FormBuilder){

}

ngOnInit(){
  this.updateFormControl();
}
user = this.ds.users
updateForm! : FormGroup;

update(){
  this.ds.users.firstName = this.updateForm.value.firstName
  this.ds.users.lastName = this.updateForm.value.lastName
  this.ds.users.password = this.updateForm.value.password
  this.ds.users.gender = this.updateForm.value.gender
  this.success = true
}

updateFormControl(){
  this.updateForm = this.fb.group({
    firstName :  [this.ds.users.firstName],
    lastName : [this.ds.users.lastName],
    mobile: [this.ds.users.mobile],
    email : [this.ds.users.email],
    password: [this.ds.users.password],
    gender: [this.ds.users.gender]
  })
}

}
