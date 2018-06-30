import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSigningComponent } from './book-signing.component';

describe('BookSigningComponent', () => {
  let component: BookSigningComponent;
  let fixture: ComponentFixture<BookSigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
