import { TestBed } from '@angular/core/testing';

import { MedicationPlanParserService } from './medication-plan-parser.service';

describe('MedicationPlanParserService', () => {
  let service: MedicationPlanParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationPlanParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
