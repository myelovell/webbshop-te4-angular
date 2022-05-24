import { Injectable, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
// import { Card } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class CardsService implements OnInit{
  public id: string;
  localUrl = '../../assets/cards.json'
  cards: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    // this.getAll()

  }

  async getAll() {
    await fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.cards = jsonData;
      console.log(this.cards)
    })
    this.getRandom(this.cards)
    return this.cards
  }

  async getRandom(cards: any) {
    // console.log(cards[Math.round(Math.random() * 503)])
    return cards[Math.round(Math.random() * 503)]
  }

  async getCurrent() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    return this.id
  }

  //cardTyoe
  async sortByType() {

  }



}

