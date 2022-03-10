import {Component, OnInit} from '@angular/core';
import {VideoScannerService} from '../shared/services/video-scanner.service';
import {MedicationPlanParserService} from '../shared/services/medication-plan-parser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  scanningFailed = false;

  constructor(
    private videoScannerService: VideoScannerService,
    private medicationPlanParserService: MedicationPlanParserService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.scan();
  }

  scan(): void {
    this.videoScannerService.scanForDataMatrixCode().then(xml => {
      this.medicationPlanParserService.parseXmlToMedicationPlan(xml);
      this.router.navigate(['manage-plans'])
    }).catch(() => this.scanningFailed = true);
  }

  retry(): void {
    this.scanningFailed = false;
    this.scan();
  }


}
