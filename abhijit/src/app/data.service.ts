import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name! :string;

  users = {firstName: '', lastName:'',mobile: '',email:'', gender:'', password:''}
  userName: any;

  constructor() { 
  }
}
