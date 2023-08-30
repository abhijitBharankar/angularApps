import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://db.ezobooks.in/kappa/image/task?limit=2000";
  constructor(private http : HttpClient) { }

  getApi(){
    const limit = 2000;
    return this.http.get(this.url, {params : {limit: limit.toString()}});
  }
  
}
