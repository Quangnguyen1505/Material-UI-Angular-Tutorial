import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  GetColorList(): colorentity[]{
    return [
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Black'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'},
      {code: 'c5', name: 'Pink'}
    ]
  }

  getCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }
}
