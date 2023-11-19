import { inject } from '@angular/core';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';
import { circuit } from 'src/utils/constants';
import { hideElement, showElement } from 'src/utils/functions';

export abstract class Circuit {
  private ledService: LedsService;
  private lcdService: LcdService;

  constructor() {
    this.ledService = inject(LedsService);
    this.lcdService = inject(LcdService);
  }

  init(): void {
    this.ledService.setPowerOn();
    this.ledService.blinkPowerLEDs();
    this.lcdService.writeZeros();
    this.lcdService.writeNum(0);

    hideElement(this.showWiresButton);

    this.addButtonClass(this.helpButton);
    this.addButtonClass(this.showWiresButton);
    this.addButtonClass(this.hideWiresButton);
  }

  destroy(): void {
    this.ledService.onDestroy();
  }

  get showWiresButton(): HTMLElement {
    return document.querySelector(
      `#${circuit.SHOW_WIRES_BUTTON}`
    ) as HTMLElement;
  }

  get hideWiresButton(): HTMLElement {
    return document.querySelector(
      `#${circuit.HIDE_WIRES_BUTTON}`
    ) as HTMLElement;
  }

  get helpButton(): HTMLElement {
    return document.querySelector(`#${circuit.HELP_BUTTON}`) as HTMLElement;
  }

  addButtonClass(button: Element): void {
    button.classList.add('circuit-btn');
  }

  addCommonListeners(): void {
    this.showWiresButton.addEventListener('click', () =>
      this.toggleElementsOnCircuit(true)
    );
    this.hideWiresButton.addEventListener('click', () =>
      this.toggleElementsOnCircuit(false)
    );
  }

  toggleElementsOnCircuit(shouldShow: boolean): void {
    const toggle = (selector: string): void => {
      document
        .querySelectorAll(selector)
        .forEach((el) =>
          el.setAttribute('display', shouldShow ? 'block' : 'none')
        );
    };

    toggle(`#${circuit.WIRES} > *`);
    toggle(`#${circuit.RESISTORS} > *`);

    hideElement(shouldShow ? this.showWiresButton : this.hideWiresButton);
    showElement(shouldShow ? this.hideWiresButton : this.showWiresButton);
  }
}
