import { Component, Input } from '@angular/core';
import { MisProductos } from 'src/app/interfaces/miProduct.interface';

@Component({
  selector: 'app-checkout-card2',
  templateUrl: './checkout-card2.component.html',
  styleUrls: ['./checkout-card2.component.css']
})
export class CheckoutCard2Component {
  @Input() productos!: MisProductos[];

}
