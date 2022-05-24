import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { CartService } from './cart.service';

// const cartKey = 'angular-10-cart'
// let cart: Array<Object> = JSON.parse(localStorage.getItem(cartKey)) || [];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../styles.scss']
})
export class CartComponent implements OnInit {
  // public cart: Array<Object> = [];
  public total = 0;
  public cart: any = []
  private cartKey = 'angular-10-cart'


  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    // this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  async ngOnInit() {
    console.log("ngOnInit C")
    this.syncCart()
    // this.getCart()
    // this.getTotal()
  }

  async getCart() {
    console.log("getCart")
    let temp = JSON.parse(localStorage.getItem(this.cartKey));
    this.cart = temp

  }

  async getTotal() {
     console.log(this.total)
    this.total = this.cart.length
    // return this.cartService.getTotal(x);
  }

  async addItem(item: any) {
    console.log(item)
    this.cartService.addItem(item);
  }

  async removeItem(item: any) {
    this.cartService.deleteItem(item);
  }

  async syncCart() {
    this.getCart();
    this.getTotal();
  }


}
