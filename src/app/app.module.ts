import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {ChoclateService} from './choclate.service';
import { SCartComponent } from './scart/scart.component';
import { BillShipAddressComponent } from './bill-ship-address/bill-ship-address.component';
import { PaymentComponent } from './payment/payment.component';
import{ FormsModule } from '@angular/forms' ;
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryComponent,
    ProductsComponent,
    SCartComponent,
    BillShipAddressComponent,
    PaymentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChoclateService,SCartComponent,CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
