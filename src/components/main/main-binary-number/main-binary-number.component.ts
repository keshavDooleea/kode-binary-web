import { Component, OnInit } from '@angular/core';
import { ByteService } from 'src/services/byte/byte.service';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';

@Component({
  selector: 'app-main-binary-number',
  templateUrl: './main-binary-number.component.html',
  styleUrls: ['./main-binary-number.component.scss'],
})
export class MainBinaryNumberComponent implements OnInit {
  constructor(
    private byteService: ByteService,
    private ledService: LedsService,
    private lcdService: LcdService
  ) {}

  ngOnInit(): void {
    this.makeNumEditable();
    this.generateNewByte();
  }

  get bits(): string {
    return this.byteService.convertor.bits;
  }

  private get numInput(): HTMLInputElement {
    return document.getElementById('num-input') as HTMLInputElement;
  }

  private makeNumEditable(): void {
    const lcdBoundingRect = this.lcdService.numDisplay?.getBoundingClientRect();
    this.lcdService.numDisplay!.style.display = 'none';

    if (!lcdBoundingRect || !this.numInput) return;

    this.numInput.style.left = `${lcdBoundingRect?.left - 20}px`;
    this.numInput.style.top = `${lcdBoundingRect?.top}px`;
    this.numInput.style.width = `${lcdBoundingRect?.width * 2}px`;
  }

  private generateNewByte(): void {
    this.byteService.setNewByte(false);
    this.ledService.turnOnLEDs();
    // this.lockComponent = false;
    this.ledService.setPowerOn();

    setTimeout(() => {
      this.lcdService.updateBinaryCode();
      this.numInput.value = `${this.byteService.currentByte}`;
    });
  }
}
