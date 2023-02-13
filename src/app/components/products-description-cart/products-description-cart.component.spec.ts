import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDescriptionCartComponent } from './products-description-cart.component';

describe('ProductsDescriptionCartComponent', () => {
  let component: ProductsDescriptionCartComponent;
  let fixture: ComponentFixture<ProductsDescriptionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDescriptionCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDescriptionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
