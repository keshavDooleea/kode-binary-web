import { Component } from '@angular/core';
import { Confetti } from 'src/classes/confetti/confetti';
import { ByteService } from 'src/services/byte/byte.service';

@Component({
  selector: 'app-main-number-binary',
  templateUrl: './main-number-binary.component.html',
  styleUrls: ['./main-number-binary.component.scss'],
})
export class MainNumberBinaryComponent {
  constructor(private byteService: ByteService) {
    this.generateNewByte();
  }

  get currentByte(): number | null {
    return this.byteService.currentByte;
  }

  get bytes(): number[] {
    return this.byteService.bytes;
  }

  private generateNewByte(): void {
    this.byteService.setNewByte();
  }

  onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);

    const isMatch = this.byteService.convertor.validate();
    if (isMatch) {
      Confetti.throwRandom();
      setTimeout(() => this.generateNewByte(), 2000);
    }
  }

  isClicked(byte: number): boolean {
    return this.byteService.convertor.isByteClicked(byte);
  }
}
