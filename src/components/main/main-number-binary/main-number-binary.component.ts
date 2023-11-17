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
  ) {
    this.generateNewByte();
  }

  ngOnInit(): void {}

  get currentByte(): number | null {
    return this.byteService.currentByte;
  }

  get bytes(): number[] {
    return this.byteService.bytes;
  }

  private generateNewByte(): void {
    this.byteService.setNewByte();
    this.ledService.resetLEDs();
    this.screenService.refresh();
    this.lockComponent = false;
  }

  onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);
    this.ledService.handleLEDs(byte);
    this.screenService.updateBinaryCode();
    this.validateSequence();
  }

  private validateSequence(): void {
    const isMatch = this.byteService.convertor.validate();
    if (!isMatch) return;

    this.lockComponent = true;
    Confetti.throwRandom();
    setTimeout(() => this.generateNewByte(), 2000);
  }
}
