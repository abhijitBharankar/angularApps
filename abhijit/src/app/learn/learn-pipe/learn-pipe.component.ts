import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent {
  users: any;
  searchText: any

  constructor(private api: ApiCallService){
    this.api.getApiCall('users').subscribe((response)=>{
      console.log(response);
      this.users = response  
    })


  }

  
  delete(id:any){
    let endpoint = "users/"+id 
    this.api.delete(endpoint).subscribe((response)=>{
      this.api.getApiCall("users").subscribe((response)=>{
        this.users = response
      })
    })
  }
}
