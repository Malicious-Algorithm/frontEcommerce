import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { Checkout2Component } from './components/shop/checkout2/checkout2.component';

import { DetailsComponent } from './components/shop/details/details.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent,pathMatch:"full"},
  { path: 'signup', component: SignupComponent},
  { path: 'shop', component: ShopComponent,
  children: [
    { path: '', component: ProductsComponent },
    { path: 'checkout2', component: Checkout2Component },
    { path: 'details/:category/:id', component: DetailsComponent },
  ],
},
  { path: 'shop/checkout2', component:Checkout2Component},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
