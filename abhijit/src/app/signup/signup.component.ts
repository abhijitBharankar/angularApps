import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;
  matchPassword : boolean =true;


  constructor(private formBuilder: FormBuilder, private ds : DataService, private router: Router) {

  }

  ngOnInit() {
    this.signupFormControl();

    // this.ds.userData =  

  }

  signupFormControl() {
    this.signupForm = this.formBuilder.group({
      firstName: ['Abhiit', [Validators.required, Validators.pattern('[a-zA-Z]*$')]],
      lastName: ['Bharankar',[Validators.required, Validators.pattern('[a-zA-Z]*$')]],
      mobile: ['9876543210', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*$')]],
      email:['abhi@gmail.com',[Validators.required, Validators.email]],
      createPassword: ['abhijit',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['abhijit',[Validators.required, Validators.minLength(6)]],
      gender:['male',[Validators.required]],
      name:['', [this.nameValidatin]]
    })
  }


  register() {

    console.log(this.signupForm.value)
    this.ds.users.firstName = this.signupForm.value.firstName
    this.ds.users.lastName = this.signupForm.value.lastName
    this.ds.users.mobile = this.signupForm.value.mobile
    this.ds.users.email = this.signupForm.value.email
    this.ds.users.gender = this.signupForm.value.gender
    this.ds.users.password = this.signupForm.value.createPassword
    this.ds.users.gender = this.signupForm.value.gender
    this.router.navigateByUrl('/home')
  }


  confirmPassword(){
    console.log(this.signupForm.value.createPassword)
    console.log(this.signupForm.value.confirmPassword)
    if(this.signupForm.value.createPassword == this.signupForm.value.confirmPassword){
      this.matchPassword = true;
    }else{
      this.matchPassword = false;
    }
  }


  nameValidatin(inp:any){
    console.log(inp.value)
    let data = inp.value?.toLowerCase();
    let isErr = data.includes('copy')
    return isErr ? {Err : true} : null;
  }
}
