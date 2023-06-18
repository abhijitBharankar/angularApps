import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.signupFormControl();
  }

  signupFormControl() {
    this.signupForm = this.formBuilder.group({
      firstName: ['Abhijit', [Validators.required, Validators.pattern('[a-zA-Z]*$')]],
      lastName: [''],
      mobile: ['', [Validators.maxLength(10), Validators.minLength(10)]]
    })
  }


  register() {

    console.log(this.signupForm.value)
  }
}
