import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(private byteService: ByteService) {}

  private writeToScreen(text: string): void {
    const screen = document.querySelector('#screen tspan');

    if (screen) {
      screen.textContent = text;
    }
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
