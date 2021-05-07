import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillShipAddressComponent } from './bill-ship-address.component';

describe('BillShipAddressComponent', () => {
  let component: BillShipAddressComponent;
  let fixture: ComponentFixture<BillShipAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillShipAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillShipAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
