import { TestBed } from '@angular/core/testing';

import { PatientsFacadeService } from './patients-facade.service';

describe('PatientsFacadeService', () => {
  let service: PatientsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
