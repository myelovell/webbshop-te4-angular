import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services';
import { CartService } from './cart/cart.service';
import { User } from './_models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['../styles.scss'], })
export class AppComponent implements OnInit{
    user: User;
    total: number;

    constructor(
      private accountService: AccountService,
      private cartService: CartService
      ) {
        this.accountService.user.subscribe(x => this.user = x);
        this.cartService.getTotal()

    }
    ngOnInit() {
      console.log("ngOnInit A")
        this.getTotal()
    }

    logout() {
        this.accountService.logout();
    }

    async getTotal() {
      // this.cartService.syncCart()
      this.total = await this.cartService.getTotal();

    }
}
