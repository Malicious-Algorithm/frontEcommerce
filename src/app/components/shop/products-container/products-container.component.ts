import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ShopService } from '../../../services/products.service';
import { CheckoutService } from '../../../services/checkout.service';
import { MisProductos } from 'src/app/interfaces/miProduct.interface';

@Component({
  selector: 'app-products-container',
  template: `
    <div class="overflow-hidden m-3 text-center rounded shadow-lg p-4 gap-4 flex-wrap align-items-center m-auto items-container container" id="shop-items-container">
        <app-products-card (addToCartClick)="addToCart($event)" (addToCartClick2)="addToCart2($event)" [product2]="product2" *ngFor="let product2 of products2"></app-products-card>
    </div>
  `,
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  products!: Product[];
  products2!:MisProductos[];

  constructor(private shopService: ShopService, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.shopService.getProducts2().subscribe((productsBack) => {
      //this.products = products;
      this.products2 = productsBack;
    });
  }

  addToCart(product: Product): void {
    this.checkoutService.updateCart(product);
  }

  addToCart2(product: MisProductos): void {
    //this.checkoutService.updateCart(product);
    this.checkoutService.agregarAlCarrito(product.producto.id,1).subscribe(); //YA LOS AGREGA! ahora solo falta mostrarlos en el carrito.
  }
}