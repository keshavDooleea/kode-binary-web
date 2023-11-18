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
    this.generateNewByte();
  }

  get bits(): string {
    return this.byteService.convertor.bits;
  }

  generateNewByte(): void {
    this.byteService.setNewByte(false);
    this.ledService.turnOnLEDs();
    // this.lockComponent = false;
    this.ledService.setPowerOn();

    setTimeout(() => {
      this.lcdService.updateBinaryCode();
      this.lcdService.writeNum(0);
    });
  }
}
