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
  tempCards: any = []
  filter: boolean = false;
  id: string;
  tag: string;
  name: string;
  catchPhrase: string;
  favouriteSaying: string;

  //filter after:
  cardType: Array<String> = ["Common", "Rare", "Special"]
  birthday: string;
  personality: Array<String> = [
    "Cranky", "Jock", "Lazy", "Normal", "Peppy", "Sisterly", "Smug", "Snooty"
  ];
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

    // console.log(this.animalType.length)
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
  async getLength(type: any, group: string) {

  }

  async filterByCardType(type: any) {
    this.filter = true
    this.tempCards = this.cards.filter((a) => {
      if (a.cardType == type) {
        console.log(a.length)
        return a;
      }
    })
    console.log(this.tempCards)
  }



  async filterByAnimalType(type: any) {
    this.filter = true
    this.tempCards = this.cards.filter((a) => {
      if (a.animalType == type) {
        return a;
      }
    })
    console.log(this.tempCards)
  }

  async filterByGender(type: any) {
    this.filter = true
    this.tempCards = this.cards.filter((a) => {
      if (a.gender == type) {
        return a;
      }
    })
    console.log(this.tempCards)
  }

  async filterByPersonality(type: any) {
    this.filter = true
    this.tempCards = this.cards.filter((a) => {
      if (a.personality == type) {
        // console.log(this.tempCards.length)
        return a;
      }
    })
  }



}
