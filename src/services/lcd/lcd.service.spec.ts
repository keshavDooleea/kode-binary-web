import { TestBed } from '@angular/core/testing';

import { LcdService } from './lcd.service';

describe('LcdService', () => {
  let service: LcdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
