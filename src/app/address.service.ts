import { Injectable } from '@angular/core';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  address: Address;


  constructor() { }
 
}
