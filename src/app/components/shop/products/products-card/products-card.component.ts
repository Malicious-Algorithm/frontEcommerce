import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
  }
}

