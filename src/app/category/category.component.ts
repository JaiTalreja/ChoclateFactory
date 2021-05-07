import { Component, OnInit } from '@angular/core';
import { MatTabLink } from '@angular/material/tabs';
import { ChoclateService } from '../choclate.service';
import { Product } from '../product';
import {Cart} from '../cart';
import {SCartComponent} from '../scart/scart.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  constructor(private _choclateService : ChoclateService, private _remove : SCartComponent,private _router : Router) { }
public Mchoclate="";
public Dchoclate="";
public Nut="";
public choclates =[];

public mchoclate =[];
public dchoclate=[];
public cnut= [];


public Crt=[];
public date;
cart : Cart;
public  cartdec=[];
public  cartinc=[];
public grandTotal  ;
public grandQuantity ;
public flag=0;
public buttonenabled=0;



Milk() : void{
console.log("clicked");
this.Mchoclate="Milk_Choclate";
console.log(this.Mchoclate);
this._choclateService.getMilkhoclate().subscribe(data => this.mchoclate = data );

  }    
  Dark() : void{
console.log("Dark clicked");
this.Dchoclate="Dark_Choclate";
console.log(this.Dchoclate);
this._choclateService.getDarkChoclate().subscribe(data => this.dchoclate = data );
  }
  CNuts() : void{
    console.log("Nuts clicked");
    this.Nut="Nuts";
    console.log(this.Nut);
    this._choclateService.getNuts().subscribe(data => this.cnut = data );

  }

  
getchoclates(choclateCat : string) : void{
  this._choclateService.choclate_category=choclateCat;
  this._choclateService.getChoclate().subscribe(data => this.choclates = data );
  

}


func (){
  
  localStorage.setItem("b","m");
}

addcart(pr : Product){
if(localStorage.getItem("Cart")==null){
  this.Crt=[];
}else{
  this.Crt=JSON.parse(localStorage.getItem("Cart"));
}
  this.grandQuantity=JSON.parse(localStorage.getItem("GrandQuantity"));
  this.grandTotal=JSON.parse(localStorage.getItem("GrandTotal"));
  //alert(this.Crt);
  this.cart = new Cart();
  this.cart.orderId=pr.prodId+pr.prodName;
  this.cart.prodId=pr.prodId;
  this.cart.prodImg=pr.imgurl;
  this.cart.prodName=pr.prodName;
  this.cart.prodPrice=pr.price;
  this.date=new Date();
  this.cart.purchaseDate=this.date;
  
  if(this.Crt.length==0){
    this.cart.prodQuantity =1;
    this.cart.totalPrice=pr.price*this.cart.prodQuantity;
    this.grandQuantity+=this.cart.prodQuantity;
    this.grandTotal+=this.cart.totalPrice;
    this.Crt.push(this.cart);
  }
  else{
  
    for(let i=0;i<this.Crt.length; i++){
      if(this.Crt[i].prodId==pr.prodId){
        this.Crt[i].prodQuantity++;

        //alert(this.Crt[i].prodId);
        // this.cart.prodQuantity=this.Crt[i].prodQuantity;
        // this.cart.totalPrice=pr.price*this.cart.prodQuantity;

        
        this.Crt[i].totalPrice=pr.price*this.Crt[i].prodQuantity;
        
        this.grandQuantity++;
        this.grandTotal+=pr.price;

        this.flag=1;
        break;
      }
      }
      if(this.flag==0){
        this.cart.prodQuantity =1;
        this.cart.totalPrice=pr.price*this.cart.prodQuantity;
        this.grandQuantity++;
        this.grandTotal+=pr.price;
        this.Crt.push(this.cart)
      }
      else{
        this.flag=0;
      }
    }
    
    localStorage.setItem("GrandTotal",this.grandTotal+"");
    localStorage.setItem("GrandQuantity",this.grandQuantity+"");
    localStorage.setItem("Cart",JSON.stringify(this.Crt));

  }

  increaseqty(pr : Product){
//  alert("Inc");
  let flag=0;
  this.cartinc=JSON.parse(localStorage.getItem("Cart"));
  alert("inc"+this.cartinc.length);
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
      localStorage.setItem("GrandTotal",(a+pr.price)+"");
      localStorage.setItem("GrandQuantity",b+"");
      flag=1;
      break;
      }
      else{
        // value for anchor visibaity
      }
    }
  }
     // this.cartinc.push();
    //  if(flag==1){
    //   let inccrt : Cart;
    //   inccrt = new Cart ();

    //   inccrt.prodQuantity =1;
    //   inccrt.totalPrice=pr.price;
    //   inccrt.orderId=pr.prodId+pr.prodName;
    //   inccrt.prodId=pr.prodId;
    //   inccrt.prodImg=pr.imgurl;
    //   inccrt.prodName=pr.prodName;
    //   inccrt.prodPrice=pr.price;
    //   this.date=new Date();
    //   this.cart.purchaseDate=this.date;


    //   flag=0;

    //  }
        // this.grandQuantity++;
        // this.grandTotal+=pr.price;
        // this.Crt.push(this.cart)

  }

  


  decreaseqty(pr : Product){
    
    let  deccrt : Cart;
    deccrt = new Cart ();

    deccrt.prodQuantity =1;
    deccrt.totalPrice=pr.price;
    deccrt.orderId=pr.prodId+pr.prodName;
    deccrt.prodId=pr.prodId;
    deccrt.prodImg=pr.imgurl;
    deccrt.prodName=pr.prodName;
    deccrt.prodPrice=pr.price;
      this.date=new Date();
      deccrt.purchaseDate=this.date;

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
       localStorage.setItem("GrandTotal",(a-pr.price)+"");
       localStorage.setItem("GrandQuantity",b+"");
       break;
       }
       else if(this.cartdec[i].prodQuantity==1){
         // value for anchor visibaity and remove the product from list .
         this._remove.ngOnInit();
         this._remove.delete(deccrt);
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
  }

  
  ngOnInit(): void {

      this.getchoclates("Milk");    

  }
 

}
