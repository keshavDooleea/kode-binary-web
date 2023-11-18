export type Binary = 0 | 1;
export type ByteMap = Map<number, Binary>;

export abstract class AbsConvertor {
  protected _map!: ByteMap;

  constructor(protected totalBytes: number[], protected currentByte: number) {
    this.init();
  }

  protected init(): void {
    this._map = new Map();

    this.totalBytes.forEach((byte) => {
      this._map.set(byte, 0);
    });
  }

  isByteClicked(byte: number): boolean {
    return this._map.get(byte) === 1;
  }

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

  get bits(): string {
    let bits = '';

    for (let [_, bit] of this._map) {
      bits += bit;
    }

    return bits;
  }

  get byteMap(): ByteMap {
    return this._map;
  }

  abstract toggle(byte: number): void;
  abstract validate(): boolean;
}
