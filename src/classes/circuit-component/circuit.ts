import { inject } from '@angular/core';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';
import { circuit } from 'src/utils/constants';

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

  addButtonClass(button: Element): void {
    button.classList.add('circuit-btn');
  }

  toggleWires(): void {
    document.querySelectorAll(`#${circuit.WIRES} > *`).forEach((wire) => {
      wire.setAttribute('display', 'none');
    });
  }
}
