import { TestBed } from '@angular/core/testing';

import { WorldinfoService } from './worldinfo.service';

describe('WorldinfoService', () => {
  let service: WorldinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
