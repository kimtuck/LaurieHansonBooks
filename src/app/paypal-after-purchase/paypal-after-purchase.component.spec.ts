import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalAfterPurchaseComponent } from './paypal-after-purchase.component';

describe('PaypalAfterPurchaseComponent', () => {
  let component: PaypalAfterPurchaseComponent;
  let fixture: ComponentFixture<PaypalAfterPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalAfterPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalAfterPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
