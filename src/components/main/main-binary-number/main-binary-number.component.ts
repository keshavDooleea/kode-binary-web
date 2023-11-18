import { Component, OnInit } from '@angular/core';
import { ByteService } from 'src/services/byte/byte.service';
import { LedsService } from 'src/services/leds/leds.service';
import { ScreenService } from 'src/services/screen/screen.service';

@Component({
  selector: 'app-main-binary-number',
  templateUrl: './main-binary-number.component.html',
  styleUrls: ['./main-binary-number.component.scss'],
})
export class MainBinaryNumberComponent implements OnInit {
  constructor(
    private byteService: ByteService,
    private ledService: LedsService,
    private screenService: ScreenService
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
    this.screenService.updateBinaryCode();
    // this.lockComponent = false;
    this.ledService.setPowerOn();
  }
}
