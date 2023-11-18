import { Injectable } from '@angular/core';
import { AbsConvertor } from 'src/classes/convertor/abs-convertor';
import { BinaryToNumber } from 'src/classes/convertor/binary-number-convertor';
import { NumberToBinary } from 'src/classes/convertor/number-binary-convertor';

@Injectable({
  providedIn: 'root',
})
export class ByteService {
  private _bytes: number[] = [32, 16, 8, 4, 2, 1];
  private _currentByte: number | null = null;
  private _convertor!: AbsConvertor;

  constructor() {}

  get bytes(): number[] {
    return this._bytes;
  }

  get totalBytes(): number {
    return this._bytes.reduce((previous, current) => previous + current, 0);
  }

  get currentByte(): number | null {
    return this._currentByte;
  }

  get convertor(): AbsConvertor {
    return this._convertor;
  }

  setNewByte(isNumToBin: boolean): void {
    this._currentByte = Math.floor(Math.random() * this.totalBytes - 1) + 1;

    if (isNumToBin) {
      this._convertor = new NumberToBinary(this._bytes, this._currentByte);
    } else {
      this._convertor = new BinaryToNumber(this._bytes, this._currentByte);
    }
  }
}
