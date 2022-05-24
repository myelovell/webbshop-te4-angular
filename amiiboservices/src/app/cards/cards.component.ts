import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../_models/card'
import { CardsService } from '../_services/cards.service';
// import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['../../styles.scss'],
})
export class CardsComponent implements OnInit {
  localUrl = '../assets/cards.json'
  cards: any = [];
  id: string;
  tag: string;

  name: string;
  //filter after:
  cardType: Array<String> = ["Common", "Rare", "Special"]
  birthday: string;
  animalType: Array<String> = [
    "Alligator", "Anteater", "Axolotl",
    "Bear", "Bear cub", "Beaver", "Bird", "Boar", "Bull",
    "Camel", "Cat", "Chameleon", "Chicken", "Cow",
    "Deer", "Dodo", "Dog", "Duck",
    "Eagle", "Elephant",
    "Fox", "Frog",
    "Giraffe", "Goat", "Gorilla",
    "Hamster", "Hedgehog", "Hippo", "Horse",
    "Kangaroo", "Kappa", "Koala",
    "Lion",
    "Manatee", "Mole", "Monkey", "Mouse",
    "Octopus", "Ostrich", "Otter", "Owl",
    "Panther", "Peacock", "Pelican", "Penguin", "Pig", "Pigeon",
    "Rabbit", "Racoon", "Raindeer", "Rhinoceros",
    "Sea lion", "Seagull", "Sheep", "Skunk", "Sloth", "Specter", "Squirrel",
    "Tapir", "Tiger", "Tortoise", "Turkey",
    "Walrus", "Wolf"];
  gender: Array<String> = ["Male", "Female"];
  personality: string;
  catchPhrase: string;
  favouriteSaying: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cardsService: CardsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    await this.cardsService.getAll()
    this.getAll()
    // this.cardsService.getRandom()
    console.log(this.animalType.length)
  }

  async getAll() {
    fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.cards = jsonData;
      // console.log(this.cards)
    })
    return this.cards
  }

  addItem(item: any) {
    this.cartService.addItem(item);
  }

  async getCurrent() {
    this.cardsService.getCurrent()
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id)
  }

  async filter(type: any) {
    console.log(`filter by: ${type}`)
  }



}
