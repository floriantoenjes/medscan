import {Medication, MedicationTimes} from './medication';

export class MedicationPlan {

  id: string;

  morningMedications: Medication[] = [];
  lunchMedications: Medication[] = [];
  eveningMedications: Medication[] = [];
  nightMedications: Medication[] = [];
  specialMedications: Medication[] = [];
  selfMedications: Medication[] = [];

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
      case MedicationTimes.NIGHT:
        this.nightMedications.push(medication);
        break;
      case MedicationTimes.SPECIAL:
        this.specialMedications.push(medication);
        break;
      case MedicationTimes.SELF_MEDICATED:
        this.selfMedications.push(medication);
        break;
    }
  }
}
