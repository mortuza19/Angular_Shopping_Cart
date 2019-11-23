import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route : ActivatedRoute,
    private cart : CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')]
    })
  }

  addItem(product){
    this.cart.addToCart(product);
    alert('Your product is added to the cart!')
  }

}