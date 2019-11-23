import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkOutForm;
  constructor(
    private cart : CartService,
    private form : FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cart.getItems();
    this.checkOutForm = this.form.group({
      name : '',
      address : ''
    })
  }

  onSubmit(customerData){
    window.alert('Your order has been submitted successfully'+customerData);
    this.items = this.cart.clearCart();
    this.checkOutForm.reset();
  }

}