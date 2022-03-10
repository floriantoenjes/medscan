import {Medication, MedicationTimes} from './medication';

export class MedicationPlan {

  id: string;

  morningMedications: Medication[] = [];
  lunchMedications: Medication[] = [];
  eveningMedications: Medication[] = [];

  constructor(id: string) {
    this.id = id;
  }

  addMedication(medication: Medication): void {
    switch (medication.medicationTime) {
      case MedicationTimes.MORNING:
        this.morningMedications.push(medication);
        break;
      case MedicationTimes.EVENING:
        this.eveningMedications.push(medication);
        break;
    }
  }
}
