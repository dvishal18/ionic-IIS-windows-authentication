import { TestBed } from '@angular/core/testing';

import { WmtsService } from './wmts.service';

describe('WmtsService', () => {
  let service: WmtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
