import {Component, OnInit} from '@angular/core';
import {VideoScannerService} from '../shared/services/video-scanner.service';
import {XMLParser} from 'fast-xml-parser';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(private videoScannerService: VideoScannerService) { }

  ngOnInit(): void {
    this.videoScannerService.scanForDataMatrixCode().then(xml => {
      console.log(xml);
      const parser = new XMLParser({
        ignoreAttributes: false
      });
      const parsedXml = parser.parse(xml);
      console.error(parsedXml);
    });
  }

}
