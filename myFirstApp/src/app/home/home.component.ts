import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){
  }
  login(){
    this.router.navigateByUrl('/login');
  }

  signup(){
    this.router.navigateByUrl('/signup')
  }

  home(){
    this.router.navigateByUrl('/home')
  }

  adminLogin(){
    this.router.navigateByUrl('/admin/adminlogin')
  }

  adminSignup(){
    this.router.navigateByUrl('/admin/adminsignup')
  }

  studentLogin(){
    this.router.navigateByUrl('/student/studentlogin')
  }

  studentSignup(){
    this.router.navigateByUrl('student/studentsignup')
  }
}
