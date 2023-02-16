import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  // traigo variable de service
  quantity$ = this.checkoutService.quantityAction$;
  total$ = this.checkoutService.totalAction$;
  cart$ = this.checkoutService.cartAction$;
  
  discount!: number;
  // traigo el service
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    // scroll hacia el top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.discount = this.checkoutService.getDiscount();
  }
}
