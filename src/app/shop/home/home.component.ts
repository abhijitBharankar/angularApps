import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  response: any;
  items: any;


  constructor(private api : ApiService){
  }

  async ngOnInit(){
    this.api.getApi().subscribe(resp=>{
      console.log(resp);
      this.response = resp;
      this.items = this.response.items;
      console.log(this.response.status);
      })

      // this.response = await this.api.getApi().toPromise();
      // this.items = this.response.items;
    }
}
