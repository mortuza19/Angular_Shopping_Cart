import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn : "root"
})
export class CartService {
  items : any[] = [];
  constructor(
    private http: HttpClient,
  ) { }
  addToCart(item){
    this.items.push(item);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}