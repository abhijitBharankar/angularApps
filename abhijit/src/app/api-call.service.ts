import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  apiUrl = "http://localhost:3000/emails/"
  userName :any
  postApiCall(url: any, value: any) {
    return this.httpClient.post(url, value)
  }

  getApiCall(){
      return this.httpClient.get(this.apiUrl)
  }

  constructor(private httpClient: HttpClient, private ds :DataService) { }
}
