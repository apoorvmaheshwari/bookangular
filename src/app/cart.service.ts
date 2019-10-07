import { Injectable } from '@angular/core';
import {Book} from "./book";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Book[]=[];
  total:number=0;

  

  constructor() { }
 
  
}
