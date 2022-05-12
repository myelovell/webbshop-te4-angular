import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({ templateUrl: 'card.component.html' })
export class CardComponent implements OnInit {

  constructor(private route: ActivatedRoute){}
  id: string;
  localUrl = '../assets/cards.json'
  card: any;
  // temp: string;

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    let temp: number = +this.id - 1;
    this.getById(temp)
  }


  getById(id: number) {

    fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.card = jsonData[id];
      console.log(this.card)
    })
    return this.card
  }


}
