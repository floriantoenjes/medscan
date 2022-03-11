import {Component, OnInit} from '@angular/core';
import {MedicationPlan} from '../shared/models/medication-plan';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-plans',
  templateUrl: './manage-plans.component.html',
  styleUrls: ['./manage-plans.component.css']
})
export class ManagePlansComponent implements OnInit {

  medicationPlan: MedicationPlan;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.medicationPlan = this.activatedRoute.snapshot.data['plan'];
  }

  ngOnInit(): void {
  }

  savePlan() {
    // TODO: Persist medication plan
    this.navigateToWelcomeScreen();
  }

  navigateToWelcomeScreen(): void {
    this.router.navigate(['']);
  }

}
