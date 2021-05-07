import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class SCartComponent implements OnInit {
 
public cart ;
public flag=0;
public A=[];
public B=[];
public ctr=0;
public len;
public gt;
public qt;
public ggt;
public qqt;
public rmi :  number;
public id1:string;
public id2:string;
public message="";
public bool=false;
constructor(private _router :Router) { }

  delete (ct : Cart) {
    
    this.len=this.cart.length-1
    //alert(ct.prodId);
    if(ct.prodId==this.cart[0].prodId){
      this.cart.shift();
      localStorage.setItem("Cart",JSON.stringify(this.cart));
    }
    else if(ct.prodId==this.cart[this.cart.length-1].prodId){
      this.cart.pop();
      localStorage.setItem("Cart",JSON.stringify(this.cart));
    }
    else{
    for (let z=0;z<this.cart.length;z++){
      //alert(z+""+this.cart.length+""+this.cart[z].prodId+""+ct.prodId);
      this.id1=ct.prodId;
      this.id2=this.cart[z].prodId;
      //alert(this.id1+" "+this.id2);
      if(this.id1==this.id2){
        this.rmi=z;
        //alert(z+""+this.cart.length+"I am in");
        break;
      }
    }
    //alert(this.rmi);
    this.cart.splice(this.rmi,1);
    localStorage.setItem("Cart",JSON.stringify(this.cart));
    this.gt=JSON.parse(localStorage.getItem("GrandTotal"));
    this.qt=JSON.parse(localStorage.getItem("GrandQuantity"));

    
  }
  localStorage.setItem("GrandQuantity",JSON.stringify((this.qqt-ct.prodQuantity)));
  localStorage.setItem("GrandTotal",JSON.stringify((this.ggt-(ct.prodQuantity*ct.prodPrice))));
  this.ctr=0;
  this.ngOnInit();
  }
  clearCart(){
    localStorage.setItem("Cart",JSON.stringify(this.B));
    localStorage.setItem("GrandQuantity",JSON.stringify(0));
  localStorage.setItem("GrandTotal",JSON.stringify(0));
    this.ngOnInit();

  }

  address(){
    if(localStorage.getItem("Cart")!=null){
      this._router.navigate(['/bill-ship-address']);
    }
    else
    {
      alert("..........You need to add products in Cart first before checking out......");
    }
  }
  cartinc=[];
  increaseqty(pr : Cart){
     //alert("Inc"+""+pr.prodId);
      let flag=0;
      this.cartinc=JSON.parse(localStorage.getItem("Cart"));
      //alert("inc"+this.cartinc.length);
      for(let i=0;i<this.cartinc.length;i++){
        let id1,id2;
        id1=pr.prodId;
        id2=this.cartinc[i].prodId;
        if(id1==id2){
          if(this.cartinc[i].prodQuantity>1||this.cartinc[i].prodQuantity==1){
         let a=JSON.parse(localStorage.getItem("GrandTotal"));
         let b=JSON.parse(localStorage.getItem("GrandQuantity"));
         b=b+1;
          this.cartinc[i].prodQuantity++;
          localStorage.setItem("Cart",JSON.stringify(this.cartinc));
          localStorage.setItem("GrandTotal",(a+pr.prodPrice)+"");
          localStorage.setItem("GrandQuantity",b+"");
          flag=1;
          break;
          }
          else{
            // value for anchor visibaity
          }
        }
      }
      this.ngOnInit();
      }
      cartdec=[];
      
  decreaseqty(pr : Cart){
    
    let f=0;
   
   this.cartdec=JSON.parse(localStorage.getItem("Cart"));
   //alert("Dec"+this.cartdec.length);
   if(this.cartdec.length>0){
   for(let i=0;i<this.cartdec.length;i++){
     let id1,id2;
     id1=pr.prodId;
     id2=this.cartdec[i].prodId;
     if(id1==id2){
       f=1;
       if(this.cartdec[i].prodQuantity>1){
      let a=JSON.parse(localStorage.getItem("GrandTotal"));
      let b=JSON.parse(localStorage.getItem("GrandQuantity"));
      b=b-1;
       this.cartdec[i].prodQuantity--;
       localStorage.setItem("Cart",JSON.stringify(this.cartdec));
       localStorage.setItem("GrandTotal",(a-pr.prodPrice)+"");
       localStorage.setItem("GrandQuantity",b+"");
       break;
       }
       else if(this.cartdec[i].prodQuantity==1){
         // value for anchor visibaity and remove the product from list .
         this.ngOnInit();
         this.delete(pr);
         break;
       }

     }//end of if id 

   } //end of for
      if(f==0){
          alert(".........This product is not present in your cart......");
      }
  }
  else{
    alert(".....Cart Is Empty Please Add Some Products......");
  }
  this.ngOnInit();
  }


    
    




























  ngOnInit(): void {
    
    if(localStorage.getItem("Cart")!==null){
    this.flag=1;
    this.bool=false;
    this.cart=JSON.parse(localStorage.getItem("Cart"));
    this.ggt=JSON.parse(localStorage.getItem("GrandTotal"));
    this.qqt=JSON.parse(localStorage.getItem("GrandQuantity"));
    }

    else if(localStorage.getItem("Cart")==null){
      this.bool=true;
      this.message="....Cart is Empty Continue Shopping To add some....";
    }

  }

}
