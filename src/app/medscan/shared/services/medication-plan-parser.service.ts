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

      const usualMedsObj = parsedXml.MP.S[0].M as [];
      usualMedsObj.forEach((usualMed: any) => {
        medicationPlan.addMedication(this.parseMedication(usualMed));
      });

      resolve(medicationPlan);
    });
  }

  parseMedication(usualMed: any): Medication {
    let medicationTime = MedicationTimes.UNKNOWN;
    let reason = '';
    let id = '';

    for (const prop in usualMed) {
      if (prop === '@_r') {
        reason = usualMed[prop];
      }

      if (prop === '@_p') {
        id = usualMed[prop];
      }

      if (prop === '@_m') {
        medicationTime = MedicationTimes.MORNING;
      }

      if (prop === '@_v') {
        medicationTime = MedicationTimes.EVENING;
      }
    }
    return new Medication(id, reason, medicationTime)
  }
}
