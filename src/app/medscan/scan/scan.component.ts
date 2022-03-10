import {Component, OnInit} from '@angular/core';
import {VideoScannerService} from '../shared/services/video-scanner.service';
import {MedicationPlanParserService} from '../shared/services/medication-plan-parser.service';
import {Router} from '@angular/router';
import {MedicationPlanRepositoryService} from "../shared/repositories/medication-plan-repository.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  scanningFailed = false;

  constructor(
    private planParserService: MedicationPlanParserService,
    private planRepositoryService: MedicationPlanRepositoryService,
    public router: Router,
    private videoScannerService: VideoScannerService,
  ) { }

  ngOnInit(): void {
    this.startScanning();
  }

  async startScanning(): Promise<void> {
    this.videoScannerService.scanForDataMatrixCode().then(async xml => {
      const medicationPlan = await this.planParserService.parseXmlToMedicationPlan(xml);
      this.planRepositoryService.save(medicationPlan);
      this.router.navigate(['manage-plans', medicationPlan.id])
    }).catch(() => this.scanningFailed = true);
  }

  retry(): void {
    this.scanningFailed = false;
    this.startScanning();
  }

}
