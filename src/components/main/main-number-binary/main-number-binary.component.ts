import { Component, OnInit } from '@angular/core';
import { AbsMain } from 'src/classes/abs-components/main';

@Component({
  selector: 'app-main-number-binary',
  templateUrl: './main-number-binary.component.html',
  styleUrls: ['./main-number-binary.component.scss'],
})
export class MainNumberBinaryComponent extends AbsMain implements OnInit {
  ngOnInit(): void {
    this.generateNewByte();
  }

  get currentByte(): number | null {
    return this.byteService.currentByte;
  }

  get bytes(): number[] {
    return this.byteService.bytes;
  }

  async onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);
    this.ledService.handleLEDs(byte);
    this.lcdService.updateBinaryCode();
  }

  override generateNewByte(): void {
    this.byteService.setNewByte(true);
    this.ledService.resetLEDs();
    this.lockComponent = false;
    this.ledService.setPowerOn();

    setTimeout(() => {
      this.lcdService.writeZeros();
      this.lcdService.updateNumber();
    });
  }

  override isMatch(): boolean {
    return this.byteService.convertor.validate();
  }
}
