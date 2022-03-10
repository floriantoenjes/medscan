import { TestBed } from '@angular/core/testing';

import { VideoScannerService } from './video-scanner.service';

describe('VideoScannerService', () => {
  let service: VideoScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
