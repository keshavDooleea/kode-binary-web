import { Component, OnInit } from '@angular/core';
import { AbsMain } from 'src/classes/abs-components/main';

@Component({
  selector: 'app-main-binary-number',
  templateUrl: './main-binary-number.component.html',
  styleUrls: ['./main-binary-number.component.scss'],
})
export class MainBinaryNumberComponent extends AbsMain implements OnInit {
  ngOnInit(): void {
    this.adjustInputElement();
    this.generateNewByte();
  }

  get bits(): string {
    return this.byteService.convertor.bits;
  }

  private get numInput(): HTMLInputElement {
    return document.getElementById('num-input') as HTMLInputElement;
  }

  private adjustInputElement(): void {
    const lcdBoundingRect = this.lcdService.numDisplay?.getBoundingClientRect();
    this.lcdService.numDisplay!.style.display = 'none';

    if (!lcdBoundingRect || !this.numInput) return;

    // this.numInput.value = `0`;

    this.numInput.style.left = `${lcdBoundingRect?.left}px`;
    this.numInput.style.top = `${lcdBoundingRect?.top}px`;
    this.numInput.style.width = `${lcdBoundingRect?.width}px`;
    this.numInput.style.height = `${lcdBoundingRect?.height}px`;
    this.numInput.style.fontSize = `${lcdBoundingRect?.height * 0.9}px`;

    this.numInput.focus();
  }

  override generateNewByte(): void {
    this.byteService.setNewByte(false);
    this.ledService.turnOnLEDs();
    this.lockComponent = false;
    this.ledService.setPowerOn();
    setTimeout(() => this.lcdService.updateBinaryCode());
  }

  isMatch(): boolean {
    const numValue = this.numInput.value;
    return this.byteService.currentByte === +numValue;
  }
}
