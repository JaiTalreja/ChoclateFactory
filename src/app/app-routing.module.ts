import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SCartComponent } from './scart/scart.component';
import { BillShipAddressComponent } from './bill-ship-address/bill-ship-address.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path : '', redirectTo: '/category', pathMatch: 'full'},
  {path : 'category', component : CategoryComponent},
  { path: 'thankyou', component : ProductsComponent},
  {path : 'scart', component : SCartComponent},
  {path : 'bill-ship-address', component : BillShipAddressComponent},
  {path : 'payment' , component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
