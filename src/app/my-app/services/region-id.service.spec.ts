import { TestBed } from '@angular/core/testing';

import { RegionIdService } from './region-id.service';

describe('RegionIdService', () => {
  let service: RegionIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
