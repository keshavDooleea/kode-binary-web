import { AbsConvertor } from './abs-convertor';

export class BinaryToNumber extends AbsConvertor {
  protected override init(): void {
    this._map = this.convertNumToBinary(this.currentByte);
  }

  toggle(byte: number): void {}

  validate(): boolean {
    return false;
  }
}
