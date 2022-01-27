import { TestBed } from '@angular/core/testing';

import { GroupserviceService } from './groupservice.service';

describe('GroupserviceService', () => {
  let service: GroupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
