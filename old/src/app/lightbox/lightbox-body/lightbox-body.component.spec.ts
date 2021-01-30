import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxBodyComponent } from './lightbox-body.component';

describe('LightboxBodyComponent', () => {
  let component: LightboxBodyComponent;
  let fixture: ComponentFixture<LightboxBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
