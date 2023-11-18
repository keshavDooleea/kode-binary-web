import { AbsConvertor, ByteMap } from './abs-convertor';

export class BinaryToNumber extends AbsConvertor {
  convertNumToBinary(number: number): ByteMap {
    let binary: ByteMap = new Map();

    this.totalBytes.forEach((byte) => {
      if (number >= byte) {
        binary.set(byte, 1);
        number -= byte;
      } else {
        binary.set(byte, 0);
      }
    });

    return binary;
  }

  protected override init(): void {
    this._map = this.convertNumToBinary(this.currentByte);
  }

  toggle(byte: number): void {}

  validate(): boolean {
    return false;
  }
}
