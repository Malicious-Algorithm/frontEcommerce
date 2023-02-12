import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
