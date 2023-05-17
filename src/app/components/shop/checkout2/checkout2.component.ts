import { Component, OnInit } from '@angular/core';
import { MisProductos } from 'src/app/interfaces/miProduct.interface';
import { CheckoutService } from 'src/app/services/checkout.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {

  productos!:MisProductos[];
  total:number = 0;
  public sendContainer = false;


  constructor(private checkoutService: CheckoutService) {}

  public sendEmail(e: Event): void {
    this.sendContainer = true;
    e.preventDefault();
    emailjs.sendForm('service_s2i6tdl', 'template_3nwt1ms', e.target as HTMLFormElement, 'sV9Ajqlig0lkp_0dX')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
    this.checkoutService.getCarritoAllProductsByIdUser().subscribe((data)=>{
      this.productos = data;
      this.productos.forEach(element =>{
        this.total += element.producto.precio;
      })
    });
  }



}
