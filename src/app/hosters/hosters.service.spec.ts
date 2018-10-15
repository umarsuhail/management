import { TestBed } from '@angular/core/testing';

import { HostersService } from './hosters.service';

describe('HostersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostersService = TestBed.get(HostersService);
    expect(service).toBeTruthy();
  });
});
