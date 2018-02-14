import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLaurieComponent } from './about-laurie.component';

describe('AboutLaurieComponent', () => {
  let component: AboutLaurieComponent;
  let fixture: ComponentFixture<AboutLaurieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLaurieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLaurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
