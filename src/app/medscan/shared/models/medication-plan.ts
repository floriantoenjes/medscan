import {Medication, MedicationTimes} from './medication';

export class MedicationPlan {
  medications: Medication[] = [];

  morningMedications: Medication[] = [];
  lunchMedications: Medication[] = [];
  eveningMedications: Medication[] = [];

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
