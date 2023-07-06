import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router , private ds: DataService, private apiCallService : ApiCallService){

  }
  title ="FalconAB"
  
  userName = this.ds.userName
  users = this.ds.users
  userSignedIn = false;

  show = true
  tableHeadings = ['Name', 'marks', 'Age']
  result = [
    {Name : 'abhijit', Marks : 83, Age : 26},
    {Name : 'Rohit', Marks : 88, Age : 27},
    {Name : 'Sumit', Marks : 78, Age : 26},
    {Name : 'Suraj', Marks : 82, Age : 25},
  ]
    
  numbers = [10, 20, 30, 40, [50,60,70,80,90,100]]

  combine = this.numbers.flat()

  background = true

  days = 7

  login(){
    this.router.navigateByUrl('/login')
  }

  signup(){
    this.router.navigateByUrl('/signup')
  }

  logout(){
    
  }
  
  ngInIt(){
    this.apiCallService.getApiCall()
    if(this.userSignedIn){

    }else{

    }
  }
  
  
  collapse(){
    this.show = !this.show;
  }

  changeBackground(){
    this.background = !this.background
  
  }

}


