import { TestBed } from '@angular/core/testing';

import { ChoclateService } from './choclate.service';

describe('ChoclateService', () => {
  let service: ChoclateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoclateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
