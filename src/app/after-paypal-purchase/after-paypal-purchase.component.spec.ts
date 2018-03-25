import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterPaypalPurchaseComponent } from './after-paypal-purchase.component';

describe('AfterPaypalPurchaseComponent', () => {
  let component: AfterPaypalPurchaseComponent;
  let fixture: ComponentFixture<AfterPaypalPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterPaypalPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterPaypalPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
