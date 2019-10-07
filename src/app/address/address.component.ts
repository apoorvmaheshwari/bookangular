import { Component, OnInit } from '@angular/core';
import {AddressService} from '../address.service';
import {Address} from '../address';
 
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  newAddress:Address;
  name:string;
  addressline1:string;
  addressline2:string;
  addressline3:string;
  creditcard:number;


  constructor(private svc:AddressService) {    }

  ngOnInit() {   }
  createAddress(){
    this.newAddress= new Address(this.name, this.addressline1,this.addressline2,this.addressline3,this.creditcard);
   
    console.log(this.newAddress);
    alert("Order Placed.Generate Bill");
    this.svc.address=this.newAddress;
  }

}
