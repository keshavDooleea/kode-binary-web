import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';
import { getByteFromText } from 'src/utils/functions';
import { circuit } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LedsService {
  constructor(private byteService: ByteService) {}

  onColor(): string {
    return '#FF8000';
  }

  offColor(): string {
    return '#fff';
  }

  getInverseColor(byte: number): string {
    return this.byteService.convertor.isByteClicked(byte)
      ? this.onColor()
      : this.offColor();
  }

  handleLEDs(byte: number): void {
    const color = this.getInverseColor(byte);
    this.setLEDColor(byte, color);
  }

  resetLEDs(): void {
    const leds = document.querySelectorAll(`#byte-leds > *`);

    leds.forEach((ledGroup) => {
      const byte = getByteFromText(ledGroup.id);
      this.setLEDColor(byte, this.offColor());
    });
  }

  private setLEDColor(byte: number, color: string): void {
    const led = document.querySelector(
      `#${circuit.LED_BYTE}${byte} #${circuit.LED}${byte}`
    );

    led?.setAttribute('fill', color);
  }
}
