import { create } from 'canvas-confetti';

export class Confetti {
  constructor() {}

  private static randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  static throwRandom(): void {
    create(undefined, { resize: true })({
      shapes: ['circle', 'circle', 'square'],
      particleCount: this.randomRange(100, 150),
      angle: this.randomRange(45, 135),
      spread: this.randomRange(40, 80),
      ticks: this.randomRange(200, 400),
      origin: {
        x: this.randomRange(0.4, 0.7),
        y: this.randomRange(0.4, 0.7),
      },
    });
  }
}
