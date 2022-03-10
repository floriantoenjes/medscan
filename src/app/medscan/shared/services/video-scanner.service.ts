import { Injectable } from '@angular/core';
import {BrowserDatamatrixCodeReader} from '@zxing/browser';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VideoScannerService {

  constructor() { }

  async scanForDataMatrixCode(): Promise<string> {
    const codeReader = new BrowserDatamatrixCodeReader();

    const videoInputDevices = await BrowserDatamatrixCodeReader.listVideoInputDevices();

    const selectedDeviceId = videoInputDevices[0].deviceId;

    console.log(`Started decode from camera with id ${selectedDeviceId}`);

    let timedOut = false;
    setTimeout(() => timedOut = true, environment.scanTimeout);

    return new Promise(((resolve, reject) => {
      codeReader.decodeFromVideoDevice(selectedDeviceId, 'scan-preview', (result, error, controls) => {
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
