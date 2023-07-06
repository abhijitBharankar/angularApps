import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  
  
  resultForm! : FormGroup
  gotName: any;
  getResult: any;
  RollNumber!:Number
  show = true

  // parsedResult:any
  result = {
    '1':{
      "RollNumber": 1,
      Name:'Abhijit Damodar Bharankar',
      Marathi: 82,
      Hindi: 83,
      English: 77,
      Maths: 84,
      Science: 78,
      SocialScience: 76,
      Percentage: 80,
      totalMarks: 476
    },
    '2':{
      "RollNumber": 2,
      Name:'Rohit Namdev Thombare',
      Marathi: 88,
      Hindi: 84,
      English: 82,
      Maths: 88,
      Science: 86,
      SocialScience: 86,
      Percentage: 85.66,
      totalMarks: 514
    },
    '3':{
      "RollNumber": 3,
      Name:'Sumit Kisan Thombare',
      Marathi: 81,
      Hindi: 80,
      English: 75,
      Maths: 74,
      Science: 78,
      SocialScience:77,
      Percentage: 77.5,
      totalMarks: 465
    },
    '4':{
      "RollNumber": 4,
      Name:'Suraj Gotad',
      Marathi: 87,
      Hindi: 88,
      English: 78,
      Maths: 77,
      Science: 79,
      SocialScience: 75,
      Percentage: 80.66,
      totalMarks:484
    }
  
  }

  stingifyResult = JSON.stringify(this.result)
  parsedResult = JSON.parse(this.stingifyResult)


  constructor(private fb : FormBuilder){

  }

  resultFormControl(){
    this.resultForm = this.fb.group({
      rollNumber : [1,[Validators.required]]
    })
  }



 
  ngOnInit(){

    this.resultFormControl()
    // console.log(this.parsedResult)
    // console.log(this.result)
    // console.log(this.result)
    // console.log(this.parsedResult[1].Roll_Number)
    // console.log(this.parsedResult[this.resultForm.value.Roll_Number].Roll_Number)
  }
  
  
  viewResult(){
    this.getResult = this.parsedResult[this.resultForm.value.rollNumber]
    console.log(this.parsedResult[this.resultForm.value.rollNumber].RollNumber);
    console.log(this.parsedResult);
    
    console.log(this.parsedResult.length);
    
    this.show = false
  }


    
  gotFocus(){
    this.show = true
  }
}
