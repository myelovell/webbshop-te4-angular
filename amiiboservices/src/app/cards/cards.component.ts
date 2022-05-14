import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../_models/card'
import { CardsService } from '../_services/cards.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['../../styles.scss'],
})
export class CardsComponent implements OnInit {
  localUrl = '../assets/cards.json'
  cards: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private cardsService: CardsService
  ) {
  }

  async ngOnInit() {
    this.getAll()
  }

  getAll() {
    fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.cards = jsonData;
      // console.log(this.cards[0])
    })
    return this.cards
  }




}
