import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';
import { screen } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(private byteService: ByteService) {}

  private writeToScreen(text: string): void {
    const screenEl = document.querySelector(`#${screen.TEXT} tspan`);
    if (!screenEl) return;

    screenEl.textContent = text;

    const lcd = document.querySelector(`#${screen.lcd}`);
    if (!lcd) return;

    const { x: lcdX, width: lcdWidth } = lcd.getBoundingClientRect();
    const { x: screenX, width: screenWidth } = screenEl.getBoundingClientRect();

    const newPosX = lcdX - screenWidth + 12;
    screenEl.setAttribute('x', `${newPosX}`);
  }

  refresh(): void {
    const nbOfBytes = this.byteService.bytes.length;
    const bits = new Array(nbOfBytes).fill('0').join('');
    this.writeToScreen(bits);
  }

  updateBinaryCode(): void {
    const bits = this.byteService.convertor.bits;
    this.writeToScreen(bits);
  }
}
