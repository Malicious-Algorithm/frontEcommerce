import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { ProductsDescriptionCartComponent } from './components/products-description-cart/products-description-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CheckoutCardComponent } from './components/checkout-card/checkout-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShopComponent,
    NavbarComponent,
    ProductsComponent, 
    FooterComponent,
    CheckoutComponent,
    DetailsComponent,
    ProductsContainerComponent,
    ProductsCardComponent,
    ProductsDescriptionCartComponent,
    CheckoutCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
