import { Component, OnInit } from '@angular/core';
import { Confetti } from 'src/classes/confetti/confetti';
import { ByteService } from 'src/services/byte/byte.service';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';

@Component({
  selector: 'app-main-number-binary',
  templateUrl: './main-number-binary.component.html',
  styleUrls: ['./main-number-binary.component.scss'],
})
export class MainNumberBinaryComponent implements OnInit {
  lockComponent = false;

  constructor(
    private byteService: ByteService,
    private ledService: LedsService,
    private lcdService: LcdService
  ) {}

  ngOnInit(): void {
    this.generateNewByte();
  }

  get currentByte(): number | null {
    return this.byteService.currentByte;
  }

  get bytes(): number[] {
    return this.byteService.bytes;
  }

  private generateNewByte(): void {
    this.byteService.setNewByte(true);
    this.ledService.resetLEDs();
    this.lockComponent = false;
    this.ledService.setPowerOn();

    setTimeout(() => {
      this.lcdService.writeZeros();
      this.lcdService.updateNumber();
    });
  }

  async onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);
    this.ledService.handleLEDs(byte);
    this.lcdService.updateBinaryCode();
    await this.validateSequence();
  }

  private async validateSequence(): Promise<void> {
    const isMatch = this.byteService.convertor.validate();
    if (!isMatch) return;

    this.lockComponent = true;
    Confetti.throwRandom();
    this.lcdService.writeSuccess();
    await this.ledService.blinkPower();
    setTimeout(() => this.generateNewByte(), 2000);
  }
}
