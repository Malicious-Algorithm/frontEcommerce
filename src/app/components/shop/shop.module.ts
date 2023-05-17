import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { Checkout2Component } from './checkout2/checkout2.component';
import { CheckoutCard2Component } from './checkout2/checkout-card2/checkout-card2.component';

@NgModule({
  declarations: [
    Checkout2Component,
    CheckoutCard2Component
  ],
  imports: [
    ShopRoutingModule
  ]
})
export class CheckoutModule { }