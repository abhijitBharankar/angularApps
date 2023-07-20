import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name! :string;

  users = {firstName: '', lastName:'',mobile: '',email:'', gender:'', password:''}
  userName: any;

  nameForSubject  = new Subject<string>
  
  constructor() { 

  }
}
