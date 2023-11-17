import { AbsConvertor } from './abs-convertor';

export class NumberToBinary extends AbsConvertor {
  toggle(byte: number): void {
    const bit = this.map.get(byte);
    const newBit = bit === 0 ? 1 : 0;
    this.map.set(byte, newBit);
    this.validate();
  }

  validate(): boolean {
    let total = 0;
    for (let [byte, bit] of this.map) {
      if (bit === 1) {
        total += byte;
      }
    }

    return total === this.currentByte;
  }
}
