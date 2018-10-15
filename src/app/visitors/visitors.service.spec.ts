import { TestBed } from '@angular/core/testing';

import { VisitorService } from './visitors.service';

describe('VisitorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorService = TestBed.get(VisitorService);
    expect(service).toBeTruthy();
  });
});
