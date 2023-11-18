import { Component, OnInit } from '@angular/core';
import { Confetti } from 'src/classes/confetti/confetti';
import { ByteService } from 'src/services/byte/byte.service';
import { LedsService } from 'src/services/leds/leds.service';
import { ScreenService } from 'src/services/leds/screen.service';

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
    private screenService: ScreenService
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
    this.screenService.refresh();
    this.lockComponent = false;
    this.ledService.setPowerOn();
  }

  async onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);
    this.ledService.handleLEDs(byte);
    this.screenService.updateBinaryCode();
    await this.validateSequence();
  }

  private async validateSequence(): Promise<void> {
    const isMatch = this.byteService.convertor.validate();
    if (!isMatch) return;

    this.lockComponent = true;
    Confetti.throwRandom();
    await this.ledService.blinkPower();
    setTimeout(() => this.generateNewByte(), 2000);
  }
}
