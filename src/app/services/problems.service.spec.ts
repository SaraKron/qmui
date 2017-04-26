import { TestBed, inject } from '@angular/core/testing';

import { ProblemsService } from './problems.service';

describe('ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemsService]
    });
  });

  it('should ...', inject([ProblemsService], (service: ProblemsService) => {
    expect(service).toBeTruthy();
  }));
});
