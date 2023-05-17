import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { DetailsComponent } from './components/shop/details/details.component';
import { ProductsContainerComponent } from './components/shop/products-container/products-container.component';
import { ProductsCardComponent } from './components/shop/products-container/products-card/products-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CheckoutCardComponent } from './components/shop/checkout/checkout-card/checkout-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CheckoutCard2Component } from './components/shop/checkout2/checkout-card2/checkout-card2.component';
import { Checkout2Component } from './components/shop/checkout2/checkout2.component';

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
    CheckoutCardComponent,
    Checkout2Component,
    CheckoutCard2Component,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
