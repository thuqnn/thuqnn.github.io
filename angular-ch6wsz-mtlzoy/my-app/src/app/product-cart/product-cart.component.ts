import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ShoppingcartService}from '../shoppingcart.service';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private ShoppingcartService: ShoppingcartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.ShoppingcartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
 
   }

  ngOnInit() {
    
  }
  onSubmit(customData){
    console.warn("Your order has been submitted",customData);
    this.items = this.ShoppingcartService.clearItems();
    this.checkoutForm.reset();
  }

}