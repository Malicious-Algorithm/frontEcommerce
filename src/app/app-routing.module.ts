import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'shop', component: ShopComponent,
  children: [
    { path: '', component: ProductsComponent },
    { path: 'checkout', component: CheckoutComponent },
  ]
},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
