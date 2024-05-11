import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList(): colorentity[]{
    return [
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Black'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'},
      {code: 'c5', name: 'Pink'}
    ]
  }
}
