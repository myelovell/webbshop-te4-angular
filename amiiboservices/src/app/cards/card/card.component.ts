import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import { CartComponent } from '../../cart/cart.component';
import { CardsService } from 'src/app/_services/cards.service';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  templateUrl: 'card.component.html',
  styleUrls: ['../../../styles.scss'] })
export class CardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public cardsService: CardsService,
    private activatedRoute: ActivatedRoute,
     private cartService: CartService
    ){

    }
  id: string;
  localUrl = '../assets/cards.json'
  card: any;
  // temp: string;



  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    // console.log(this.id)
    let temp: number = +this.id - 1;
    this.getById(temp)
    this.cardsService.getCurrent()
    this.getCurrent()
  }


  getById(id: number) {

    fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.card = jsonData[id];
      console.log(this.card)
    })
    return this.card
  }

  addItem(item: any) {
    console.log(item)
    this.cartService.addItem(item);
  }

  removeItem(item: any) {
    this.cartService.deleteItem(item);
  }

  async getCurrent() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }



}
