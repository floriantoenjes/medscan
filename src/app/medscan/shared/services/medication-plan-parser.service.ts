import {Injectable} from '@angular/core';
import {MedicationPlan} from '../models/medication-plan';
import {BehaviorSubject} from 'rxjs';
import {XMLParser} from 'fast-xml-parser';
import {Medication, MedicationTimes} from '../models/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationPlanParserService {

  currentMedicationPlan = new BehaviorSubject<MedicationPlan | null>(null);

  constructor() { }

  parseXmlToMedicationPlan(xml: any): void {
    const medicationPlan = new MedicationPlan();


    console.log(xml);
    const parser = new XMLParser({
      ignoreAttributes: false
    });
    const parsedXml = parser.parse(xml);

    console.log(parsedXml);

    const usualMedsObj = parsedXml.MP.S[0].M as [];
    usualMedsObj.forEach((usualMed: any) => {

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

      medicationPlan.addMedication(
        new Medication(id, reason, medicationTime)
      );
    });

    this.currentMedicationPlan.next(medicationPlan);
  }
}
