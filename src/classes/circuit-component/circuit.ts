import { inject } from '@angular/core';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';

export abstract class Circuit {
  private ledService: LedsService;
  private lcdService: LcdService;

  constructor() {
    this.ledService = inject(LedsService);
    this.lcdService = inject(LcdService);
  }

  init(): void {
    this.ledService.setPowerOn();
    this.lcdService.writeZeros();
    this.lcdService.writeNum(0);
  }
}
