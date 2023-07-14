import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  apiUrl = "http://localhost:3000/"
  userName :any
  
  constructor(private httpClient: HttpClient, private ds :DataService) { }

  postApiCall(url: any, value: any) {
    return this.httpClient.post(url, value)
  }

  getApiCall(endpoint:any){
    let url = this.apiUrl + endpoint 
      return this.httpClient.get(url)
  }

  delete(endpoint:any){
    let url = this.apiUrl + endpoint
    return this.httpClient.delete(url)
  }
}
