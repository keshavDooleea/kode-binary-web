import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';
import { lcd } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LcdService {
  constructor(private byteService: ByteService) {}

  get numDisplay(): HTMLElement | null {
    return document.querySelector(`#${lcd.NUM_LCD} #${lcd.NUM_DISPLAY} tspan`);
  }

  get binDisplay(): HTMLElement | null {
    return document.querySelector(`#${lcd.BIN_LCD} #${lcd.BIN_DISPLAY} tspan`);
  }

  private write(element: HTMLElement | null, text: string): void {
    if (!element) return;
    element.textContent = text;
  }

  writeBin(text: string): void {
    this.write(this.binDisplay, text);
  }

  writeNum(text: string | number | null): void {
    this.write(this.numDisplay, `${text}`);
  }

  writeZeros(): void {
    const nbOfBytes = this.byteService.bytes.length;
    const bits = new Array(nbOfBytes).fill('0').join('');
    this.writeBin(bits);
  }

  writeError(): void {
    this.writeBin('Error');
  }

  writeSuccess(): void {
    this.writeBin('Bravo');
  }

  updateBinaryCode(): void {
    const { bits } = this.byteService.convertor;
    this.writeBin(bits);
  }

  updateNumber(): void {
    const { currentByte } = this.byteService;
    this.writeNum(currentByte);
  }
}
