import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMayoreoComponent } from './productos-mayoreo.component';

describe('ProductosMayoreoComponent', () => {
  let component: ProductosMayoreoComponent;
  let fixture: ComponentFixture<ProductosMayoreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosMayoreoComponent]
    });
    fixture = TestBed.createComponent(ProductosMayoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
