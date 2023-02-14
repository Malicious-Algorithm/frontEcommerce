import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { DetailsComponent } from './components/shop/products/details/details.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'shop', component: ShopComponent,
  children: [
    { path: '', component: ProductsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'details/:product', component: DetailsComponent },
  ]
},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
