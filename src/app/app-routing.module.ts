import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookinfoComponent} from './bookinfo/bookinfo.component';
import { CardComponent } from './card/card.component';
import { AddressComponent } from "./address/address.component";
import { CartComponent } from './cart/cart.component';
import {BillComponent} from './bill/bill.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:CardComponent},
  { path: 'info/:id', component: BookinfoComponent },
  { path: 'address', component: AddressComponent },
  {path:'cart',component:CartComponent},
  {path:'bill',component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
