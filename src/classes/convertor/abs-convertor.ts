export type Binary = 0 | 1;

export abstract class AbsConvertor {
  protected map!: Map<number, Binary>;

  constructor(private totalBytes: number[], protected currentByte: number) {
    this.init();
  }

  private init(): void {
    this.map = new Map();

    this.totalBytes.forEach((byte) => {
      this.map.set(byte, 0);
    });
  }

  isByteClicked(byte: number): boolean {
    return this.map.get(byte) === 1;
  }

  get bits(): string {
    let bits = '';

    for (let [_, bit] of this.map) {
      bits += bit;
    }

    return bits;
  }

  abstract toggle(byte: number): void;
  abstract validate(): boolean;
}
