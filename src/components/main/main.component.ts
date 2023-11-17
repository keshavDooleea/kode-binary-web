import { Component } from '@angular/core';
import { ByteService } from 'src/services/byte/byte.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private byteService: ByteService) {
    this.byteService.setNewByte();
  }

  get currentByte(): number | null {
    return this.byteService.currentByte;
  }

  get bytes(): number[] {
    return this.byteService.bytes;
  }

  onCircuitButtonClicked(byte: number) {
    this.byteService.convertor.toggle(byte);
  }

  isClicked(byte: number): boolean {
    return this.byteService.convertor.isByteClicked(byte);
  }
}
