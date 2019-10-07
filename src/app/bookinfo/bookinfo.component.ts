import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {CartService} from '../cart.service'


@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {
  books:Book;
  name:string="";
  price:number=0;
  author:string="";
  image:string="";
  details:string="";
  
  index:number=0;



  constructor(public svc:DataService, private route:ActivatedRoute,private cart:CartService) {  }

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if (element.id == this.index) {
       
        this.books = element;
      }});
      console.log(this.books);
      this.name=this.books.name;
      this.price=this.books.price;
      this.author=this.books.author;
      this.image=this.books.image;
      this.details=this.books.details;
}

lol(){
  this.cart.cart.push(new Book(this.cart.cart.length,this.name,this.price,this.author,'',''));
  this.cart.total=this.cart.total+this.price;
}


}
