export enum MedicationTimes {
  MORNING,
  EVENING,

  UNKNOWN
}

export class Medication {
  amount: string;
  reason: string;
  medicationTime: MedicationTimes;

  constructor(amount: string, reason: string, medicationTime: MedicationTimes) {
    this.amount = amount;
    this.reason = reason;
    this.medicationTime = medicationTime;
  }

}
