import { TestBed } from '@angular/core/testing';

import { GitSearchserviceService } from './git-searchservice.service';

describe('GitSearchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSearchserviceService = TestBed.get(GitSearchserviceService);
    expect(service).toBeTruthy();
  });
});
