import { Injectable, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
// import { Card } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class CardsService implements OnInit{

  localUrl = '../assets/cards.json.'
  cards: any = [];
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // fetch('../assets/cards.json').then(res => res.json())
    // .then(jsonData => {
    //   this.cards = jsonData;
    // })
    this.getAll()
  }

  getAll() {
    // console.log( this.http.get(this.localUrl))
    // return this.http.get(this.localUrl);
    fetch('../assets/cards.json').then(res => res.json())
    .then(data => {
      console.log(data)
      return data;
    })
  }
}

