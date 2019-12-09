import { TestBed } from '@angular/core/testing';

import { GitSearchService } from './git-searchservice.service';

describe('GitSearchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSearchService = TestBed.get(GitSearchService);
    expect(service).toBeTruthy();
  });
});
