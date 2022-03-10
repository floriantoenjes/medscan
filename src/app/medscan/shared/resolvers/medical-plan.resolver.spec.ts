import { TestBed } from '@angular/core/testing';

import { MedicalPlanResolver } from './medical-plan.resolver';

describe('MedicalPlanResolver', () => {
  let resolver: MedicalPlanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MedicalPlanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
