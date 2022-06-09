import { Injectable, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from './cart.component';
// import { AppComponent } from '../app.component';

//array in local storage for registered cards, currently depricated
const cartKey = 'angular-10-cart'
// let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

let cart: Array<Object> = JSON.parse(localStorage.getItem(cartKey)) || [];
let temp = [];

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit{

  //array in local storage for registered cards, currently depricated
  public total = 0;
  public cart: any = []
  cartKey: string = 'angular-10-cart'
  // cart = JSON.parse(localStorage.getItem(this.cartKey)) || [];

  constructor(
    private router: Router,
    private http: HttpClient,
    // private cartComponent: CartComponent,
    // private appComponent: AppComponent
  ) {
    // let cart: Array<Object> = JSON.parse(localStorage.getItem(cartKey)) || [];
  }

  async ngOnInit() {
    console.log("ngOnInit S")
    this.syncCart();
    // this.getItems()
    // this.getTotal()
  }

  deleteItem(item: any){
    let temp = JSON.parse(localStorage.getItem(this.cartKey));
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == item.id) {
        temp.splice(i, 1)
        break;
      }
    }
    this.cart = temp
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart))

    this.syncCart()
  }


  async addItem(item: any) {
    cart.push(item)
    localStorage.setItem(this.cartKey, JSON.stringify(cart))
    this.syncCart()
  }

  async getItems() {
    console.log("getCart")
    let temp = JSON.parse(localStorage.getItem(this.cartKey));
    this.cart = temp

  }

  async getTotal() {
    let temp = JSON.parse(localStorage.getItem(this.cartKey));
   this.total = temp.length
   return this.total
 }

  clearCart() {}

  async syncCart() {
    this.getItems();
    this.getTotal();

    // window.location.reload();
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    // this.appComponent.getTotal()
  }


}

