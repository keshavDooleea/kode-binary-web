import { Injectable } from '@angular/core';
import { ByteService } from '../byte/byte.service';
import { lcd } from 'src/utils/constants';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { delay } from 'src/utils/functions';

@Injectable({
  providedIn: 'root',
})
export class LcdService {
  constructor(
    private byteService: ByteService,
    private localStorageService: LocalStorageService
  ) {}

  get numDisplay(): HTMLElement | null {
    return document.querySelector(`#${lcd.NUM_LCD} #${lcd.NUM_DISPLAY} tspan`);
  }

  get binDisplay(): HTMLElement | null {
    return document.querySelector(`#${lcd.BIN_LCD} #${lcd.BIN_DISPLAY} tspan`);
  }

  get languageElement(): HTMLElement | null {
    return document.querySelector(`#${lcd.LANG} tspan`);
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
    const error = this.localStorageService.languageStorage.isEngLang()
      ? 'Error'
      : 'Erreur';

    this.writeBin(error);
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

  updateLanguage(): void {
    if (!this.languageElement) return;

    this.languageElement.textContent =
      this.localStorageService.languageStorage.getLanguage();
  }

  async updateAndBlinkLanguage(): Promise<void> {
    if (!this.languageElement) return;

    this.languageElement.textContent = '';
    const delayMs = 300;

    const fullLanguage =
      this.localStorageService.languageStorage.getFullLanguage();

    for (let i = 0; i < 3; i++) {
      this.writeBin(fullLanguage);
      await delay(delayMs);
      this.writeBin('');
      await delay(delayMs);
    }

    this.updateLanguage();
    this.updateBinaryCode();
  }
}
