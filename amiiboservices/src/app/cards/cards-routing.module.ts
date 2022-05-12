import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LayoutComponent } from './layout.component';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component'

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', component: CardsComponent },
          { path: ':id', component: CardComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
