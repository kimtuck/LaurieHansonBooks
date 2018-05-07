import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLightboxComponent } from './angular-lightbox.component';

describe('AngularLightboxComponent', () => {
  let component: AngularLightboxComponent;
  let fixture: ComponentFixture<AngularLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
