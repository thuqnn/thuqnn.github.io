import { Component, OnInit } from '@angular/core';
import { ShoppingcartService} from '../shoppingcart.service';
@Component({
  selector: 'app-product-shipping',
  templateUrl: './product-shipping.component.html',
  styleUrls: ['./product-shipping.component.css']
})
export class ProductShippingComponent implements OnInit {
  shoppingCosts;
  constructor(
    private ShoppingcartService:ShoppingcartService
  ) { }

  ngOnInit() {
    this.shoppingCosts = this.ShoppingcartService.getShippingPrices();
  }

}