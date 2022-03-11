import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {MedicationPlan} from "../models/medication-plan";
import {MedicationPlanRepositoryService} from "../repositories/medication-plan-repository.service";
import {EMPTY, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicationPlanResolver implements Resolve<Observable<MedicationPlan | undefined>> {

  constructor(
    private medicationPlanRepository: MedicationPlanRepositoryService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MedicationPlan | undefined> {
    const planId = route.paramMap.get('planId');
    if (planId) {
      const medicationPlan = this.medicationPlanRepository.get(planId);
      if (medicationPlan) {
        return of(medicationPlan);
      }
    }
    this.router.navigate(['']);
    return EMPTY;
  }
}
