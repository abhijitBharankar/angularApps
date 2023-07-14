import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  response :any

  constructor(private apiCallService : ApiCallService){

  }

  submit(formData:any){
    console.log(formData.email)
    this.apiCallService.getApiCall('emails').subscribe(res=>{
      console.log(Object.keys(res));
      console.log(Object(res).email);
      this.response =  JSON.stringify(res)

      console.log(this.response);
      
    })
  }
}
