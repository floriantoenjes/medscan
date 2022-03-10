import { Injectable } from '@angular/core';
import {MedicationPlan} from "../models/medication-plan";

@Injectable({
  providedIn: 'root'
})
export class MedicationPlanRepositoryService {

  store: Map<string, MedicationPlan> = new Map<string, MedicationPlan>();

  constructor() { }

  persist(medicationPlan: MedicationPlan): void {
    this.store.set(medicationPlan.id, medicationPlan);
  }

  getMedicationPlan(id: string): MedicationPlan | undefined {
    return this.store.get(id);
  }
}
