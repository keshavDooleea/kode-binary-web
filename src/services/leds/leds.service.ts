import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';
import { delay, getByteFromText } from 'src/utils/functions';
import { circuit, led, power } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LedsService {
  constructor(private byteService: ByteService) {}

  getInverseColor(byte: number): string {
    return this.byteService.convertor.isByteClicked(byte) ? led.ON : led.OFF;
  }

  handleLEDs(byte: number): void {
    const color = this.getInverseColor(byte);
    this.setLEDColor(byte, color);
  }

  resetLEDs(): void {
    const leds = document.querySelectorAll(`#byte-leds > *`);

    leds.forEach((ledGroup) => {
      const byte = getByteFromText(ledGroup.id);
      this.setLEDColor(byte, led.OFF);
    });
  }

  private get powerLED(): HTMLElement | null {
    return document.querySelector('#power circle');
  }

  setPowerOn(): void {
    this.powerLED?.setAttribute('fill', power.ON);
  }

  setPowerOff(): void {
    this.powerLED?.setAttribute('fill', power.OFF);
  }

  async blinkPower(): Promise<void> {
    const delayMs = 200;
    const nbOfBlinks = 4;

    for (let i = 0; i < nbOfBlinks; i++) {
      this.setPowerOff();
      await delay(delayMs);
      this.setPowerOn();
      await delay(delayMs);
      this.setPowerOff();
    }
  }

  private setLEDColor(byte: number, color: string): void {
    const led = document.querySelector(
      `#${circuit.LED_BYTE}${byte} #${circuit.LED}${byte}`
    );

    led?.setAttribute('fill', color);
  }
}
