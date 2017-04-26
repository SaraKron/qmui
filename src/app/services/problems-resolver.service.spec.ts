import { TestBed, inject } from '@angular/core/testing';

import { ProblemsResolverService } from './problems-resolver.service';

describe('ProblemsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemsResolverService]
    });
  });

  it('should ...', inject([ProblemsResolverService], (service: ProblemsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
