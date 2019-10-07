import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    BookinfoComponent,
    AddressComponent,
    CartComponent,
    BillComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
