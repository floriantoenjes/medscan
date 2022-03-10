import {Component, OnInit} from '@angular/core';
import {MedicationPlanParserService} from '../shared/services/medication-plan-parser.service';
import {MedicationPlan} from '../shared/models/medication-plan';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-plans',
  templateUrl: './manage-plans.component.html',
  styleUrls: ['./manage-plans.component.css']
})
export class ManagePlansComponent implements OnInit {

  medicationPlan$: Observable<MedicationPlan | null>;

  constructor(
    private medicationPlanParserService: MedicationPlanParserService,
    private router: Router
  ) {
    this.medicationPlan$ = medicationPlanParserService.currentMedicationPlan.pipe(tap(mp => {
      if (mp === null) {
        this.navigateToWelcomeScreen();
      }
    }));
  }

  ngOnInit(): void {
  }


  savePlan() {
    this.navigateToWelcomeScreen();
  }

  navigateToWelcomeScreen(): void {
    console.log('Persist medication plan!')
    this.router.navigate(['']);
  }

}
