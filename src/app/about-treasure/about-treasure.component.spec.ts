import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTreasureComponent } from './about-treasure.component';

describe('AboutTreasureComponent', () => {
  let component: AboutTreasureComponent;
  let fixture: ComponentFixture<AboutTreasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTreasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
