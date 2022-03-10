import {Component, OnInit} from '@angular/core';
import {VideoScannerService} from '../shared/services/video-scanner.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(private videoScannerService: VideoScannerService) { }

  ngOnInit(): void {
    this.videoScannerService.scanForDataMatrixCode().then(console.log);
  }

}
