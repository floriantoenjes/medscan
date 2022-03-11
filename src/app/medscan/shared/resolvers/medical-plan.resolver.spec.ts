import { TestBed } from '@angular/core/testing';

import { MedicationPlanResolver } from './medication-plan-resolver.service';

describe('MedicalPlanResolver', () => {
  let resolver: MedicationPlanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MedicationPlanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
