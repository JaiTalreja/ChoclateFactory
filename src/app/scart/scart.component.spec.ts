import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCartComponent } from './scart.component';

describe('SCartComponent', () => {
  let component: SCartComponent;
  let fixture: ComponentFixture<SCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
