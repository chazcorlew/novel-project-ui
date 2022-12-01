import { TestBed } from '@angular/core/testing';

import { NpstorageService } from './npstorage.service';

describe('NpstorageService', () => {
  let service: NpstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
