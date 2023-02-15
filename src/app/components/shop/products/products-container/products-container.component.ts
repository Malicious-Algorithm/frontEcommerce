import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ShopService } from '../../services/products.service';

@Component({
  selector: 'app-products-container',
  template: `
    <div class="overflow-hidden p-4 m-3 text-center bg-white p-2 gap-3 flex-wrap align-items-center m-auto items-container container" id="shop-items-container">
        <app-products-card [product]="product" *ngFor="let product of products"></app-products-card>
    </div>
  `,
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  products!: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
