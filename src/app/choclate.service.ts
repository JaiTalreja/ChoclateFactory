import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChoclateService {

  constructor(private http : HttpClient) { }

  public choclate_category="Milk";
  private _urlMilkChoclate="./assets/Milk_Choclate.json";
  private _urlDarkChoclate="./assets/Dark_Choclate.json";
  private _urlNuts="./assets/Nuts.json";
  getMilkhoclate(){

    return this.http.get<Product []>(this._urlMilkChoclate);
  }
  getDarkChoclate(){

    return this.http.get<Product []>(this._urlDarkChoclate);
  }
  getNuts(){

    return this.http.get<Product []>(this._urlNuts);
  }

getChoclate() : Observable<Product[]>{
if(this.choclate_category=="Milk"){
  return this.http.get<Product []>(this._urlMilkChoclate);

}
else if(this.choclate_category=="Dark"){
  return this.http.get<Product []>(this._urlDarkChoclate);
}
else if(this.choclate_category=="Nut"){
  return this.http.get<Product []>(this._urlNuts);
}
}


}
