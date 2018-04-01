import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheBookComponent } from './about-the-book.component';

describe('AboutTheBookComponent', () => {
  let component: AboutTheBookComponent;
  let fixture: ComponentFixture<AboutTheBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
