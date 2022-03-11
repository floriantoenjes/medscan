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

      console.log(parsedXml);

      const planId = parsedXml.MP['@_U'];
      const medicationPlan = new MedicationPlan(planId);

      const usualMedsObj = parsedXml.MP.S[0].M;
      if (usualMedsObj.length > 0) {
        usualMedsObj.forEach((usualMed: any) => {
          medicationPlan.addMedication(this.parseMedication(usualMed));
        });
      } else {
        medicationPlan.addMedication(this.parseMedication(usualMedsObj));
      }

      const specialMedsObj = parsedXml.MP.S[1].M;
      if (specialMedsObj.length > 0) {
        specialMedsObj.forEach((specialMed: any) => {
          medicationPlan.addMedication(this.parseMedication(specialMed, MedicationTimes.SPECIAL));
        });
      } else {
        medicationPlan.addMedication(this.parseMedication(specialMedsObj, MedicationTimes.SPECIAL));
      }

      const selfMedicatedObj = parsedXml.MP.S[2].M;
      if (selfMedicatedObj.length > 0) {
        selfMedicatedObj.forEach((selfMed: any) => {
          medicationPlan.addMedication(this.parseMedication(selfMed, MedicationTimes.SELF_MEDICATED));
        });
      } else {
        medicationPlan.addMedication(this.parseMedication(selfMedicatedObj, MedicationTimes.SELF_MEDICATED));
      }

      resolve(medicationPlan);
    });
  }

  parseMedication(usualMed: any, medicationTime = MedicationTimes.UNKNOWN): Medication {
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
