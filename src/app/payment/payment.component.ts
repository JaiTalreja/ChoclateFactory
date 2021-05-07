import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
public B=[];
  constructor() { }

  clearCart(){
      localStorage.setItem("Cart",JSON.stringify(this.B));
      localStorage.setItem("GrandQuantity",JSON.stringify(0));
    localStorage.setItem("GrandTotal",JSON.stringify(0));
   
  }
  ngOnInit(): void {
  }

}
