import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import { CartService } from '../cart.service';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  name: string = "";
  addressline1: string = "";
  addressline2: string = "";
  addressline3: string = "";
  creditcard: number = 0;


  constructor(private svc: AddressService, private route: ActivatedRoute, public cart: CartService, public data: DataService) { }

  ngOnInit() {
    this.name = this.svc.address.name;
    this.addressline1 = this.svc.address.addressline1;
    this.addressline2 = this.svc.address.addressline2;
    this.addressline3 = this.svc.address.addressline3;
    this.creditcard = this.svc.address.creditcard;


  }
}