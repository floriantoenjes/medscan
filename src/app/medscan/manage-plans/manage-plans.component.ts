import { Component, OnInit } from '@angular/core';
import {MedicationPlanParserService} from '../shared/services/medication-plan-parser.service';
import {MedicationPlan} from '../shared/models/medication-plan';
import {Observable, Observer, of} from 'rxjs';

@Component({
  selector: 'app-manage-plans',
  templateUrl: './manage-plans.component.html',
  styleUrls: ['./manage-plans.component.css']
})
export class ManagePlansComponent implements OnInit {

  medicationPlan$: Observable<MedicationPlan>;

  constructor(private medicationPlanParserService: MedicationPlanParserService) {
    this.medicationPlan$ = medicationPlanParserService.currentMedicationPlan;
  }

  ngOnInit(): void {
  }

}
