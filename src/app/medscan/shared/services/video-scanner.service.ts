import { Injectable } from '@angular/core';
import {BrowserDatamatrixCodeReader} from '@zxing/browser';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VideoScannerService {

  codeReader = new BrowserDatamatrixCodeReader();

  constructor() { }

  async scanForDataMatrixCode(): Promise<string> {
    const videoInputDevices = await BrowserDatamatrixCodeReader.listVideoInputDevices();
    const selectedDeviceId = videoInputDevices[0].deviceId;

    let timedOut = false;
    setTimeout(() => timedOut = true, environment.scanTimeout);

    return new Promise(((resolve, reject) => {
      this.codeReader.decodeFromVideoDevice(selectedDeviceId, 'scan-preview', (result, error, controls) => {
        if (result) {
          controls.stop();
          resolve(result.getText());
          return;
        }

        if (timedOut) {
          controls.stop();
          reject('No DataMatrix found');
          return;
        }
      });
    }));

  }
}
