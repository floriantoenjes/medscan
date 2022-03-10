export enum MedicationTimes {
  MORNING,
  LUNCH,
  EVENING,

  UNKNOWN
}

export class Medication {
  id: string;
  reason: string;
  medicationTime: MedicationTimes;

  constructor(id: string, reason: string, medicationTime: MedicationTimes) {
    this.id = id;
    this.reason = reason;
    this.medicationTime = medicationTime;
  }

}
