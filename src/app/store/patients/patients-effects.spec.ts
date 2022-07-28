import { TestBed } from '@angular/core/testing';

import { PatientsEffects } from './patients-effects';

describe('PatinetsEffectsService', () => {
  let service: PatientsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
