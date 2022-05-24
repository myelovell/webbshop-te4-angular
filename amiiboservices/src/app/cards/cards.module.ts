import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CardsRoutingModule } from './cards-routing.module';
import { LayoutComponent } from './layout.component';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from '../cart/cart.component';
// import { CartComponent } from '../cart/cart.component';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      CardsRoutingModule,
      IonicModule.forRoot()
  ],
  declarations: [
      LayoutComponent,
      CardsComponent,
      CardComponent,

  ]
})
export class CardsModule { }
