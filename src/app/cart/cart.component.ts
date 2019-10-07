import { Component, OnInit } from '@angular/core';
import {CartService } from '../cart.service';
import {DataService} from '../data.service';
import {AddressService} from '../address.service';
import {Book} from '../book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private cart:CartService) { }

  ngOnInit() {

  }

}
