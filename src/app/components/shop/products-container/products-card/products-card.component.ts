import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MisProductos } from 'src/app/interfaces/miProduct.interface';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
  // Este change actualiza la data, en este caso es el onpush a que
  // lo usamos para agregar los productos
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsCardComponent implements OnInit {
  @Input() product!: Producto;

  @Output() addToCartClick = new EventEmitter<Producto>();

  onClick(): void {
    // Llamo al evento y emito enviandole el producto
    this.addToCartClick.emit(this.product);
  }

  ngOnInit(): void { }
}

