import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {MedicationPlan} from "../models/medication-plan";
import {MedicationPlanRepositoryService} from "../repositories/medication-plan-repository.service";

@Injectable({
  providedIn: 'root'
})
export class MedicalPlanResolver implements Resolve<MedicationPlan | undefined> {

  constructor(
    private medicationPlanRepository: MedicationPlanRepositoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MedicationPlan | undefined {
    const planId = route.paramMap.get('planId');
    if (planId) {
      return this.medicationPlanRepository.getMedicationPlan(planId);
    }
    return undefined;
  }
}
