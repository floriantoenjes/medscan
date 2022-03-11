import {Injectable} from '@angular/core';
import {MedicationPlan} from '../models/medication-plan';
import {XMLParser} from 'fast-xml-parser';
import {Medication, MedicationTimes} from '../models/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationPlanParserService {

  xmlParser = new XMLParser({
    ignoreAttributes: false
  });

  constructor() { }

  parseXmlToMedicationPlan(xml: any): Promise<MedicationPlan> {
    return new Promise((resolve) => {
      const parsedXml = this.xmlParser.parse(xml);

      const planId = parsedXml.MP['@_U'];
      const medicationPlan = new MedicationPlan(planId);

      const usualMedsObj = parsedXml.MP.S[0].M;
      this.parseMedicationsObj(medicationPlan, usualMedsObj);

      const specialMedsObj = parsedXml.MP.S[1].M;
      this.parseMedicationsObj(medicationPlan, specialMedsObj, MedicationTimes.SPECIAL);

      const selfMedicatedObj = parsedXml.MP.S[2].M;
      this.parseMedicationsObj(medicationPlan, selfMedicatedObj, MedicationTimes.SELF_MEDICATED);

      resolve(medicationPlan);
    });
  }

  parseMedicationsObj(medicationPlan: MedicationPlan, medicationsObj: any, medicationTime = MedicationTimes.UNKNOWN): void {
    if (medicationsObj.length > 0) {
      medicationsObj.forEach((med: any) => {
        medicationPlan.addMedication(this.parseMedication(med, medicationTime));
      });
    } else {
      medicationPlan.addMedication(this.parseMedication(medicationsObj, medicationTime));
    }
  }

  parseMedication(usualMed: any, medicationTime: MedicationTimes): Medication {
    let reason = '';
    let id = '';

    for (const prop in usualMed) {
      if (prop === '@_r') {
        reason = usualMed[prop];
      }

      if (prop === '@_p') {
        id = usualMed[prop];
      }

      if (medicationTime === MedicationTimes.UNKNOWN) {
        if (prop === '@_m') {
          medicationTime = MedicationTimes.MORNING;
        }

        if (prop === '@_v') {
          medicationTime = MedicationTimes.EVENING;
        }
      }
    }
    return new Medication(id, reason, medicationTime)
  }
}
