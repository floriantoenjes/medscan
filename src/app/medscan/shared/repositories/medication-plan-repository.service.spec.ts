import { TestBed } from '@angular/core/testing';

import { MedicationPlanRepositoryService } from './medication-plan-repository.service';

describe('MedicationPlanRepositoryService', () => {
  let service: MedicationPlanRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationPlanRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
