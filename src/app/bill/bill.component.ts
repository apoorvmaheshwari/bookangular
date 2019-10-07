import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
 
  constructor(public svc:DataService, private route:ActivatedRoute,private cart:CartService) {  }

  ngOnInit() {
   

}
