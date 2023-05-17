import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../interfaces/products.interface';
import { MisProductos } from 'src/app/interfaces/miProduct.interface';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
  // Este change actualiza la data, en este caso es el onpush a que
  // lo usamos para agregar los productos
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCardComponent implements OnInit {
  @Input() product2!: MisProductos;
  @Input() product!:Product;

  @Output() addToCartClick = new EventEmitter<Product>();
  @Output() addToCartClick2 = new EventEmitter<MisProductos>();

  onClick(): void {
    // Llamo al evento y emito enviandole el producto
    this.addToCartClick.emit(this.product);
    this.addToCartClick2.emit(this.product2);
  }

  ngOnInit(): void { }
}