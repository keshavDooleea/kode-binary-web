import { power } from 'src/utils/constants';

type Timeout = ReturnType<typeof setInterval>;

export class PowerLed {
  private interval!: Timeout;
  private intervalMs: number;
  private currColor: string;

  constructor(private id: string, private initialColor: string) {
    this.intervalMs = 300;
    this.currColor = initialColor;
  }

  private get powerElement(): HTMLElement {
    return document.querySelector(`#power_${this.id}`) as HTMLElement;
  }

  private blink(): void {
    if (!this.powerElement) return;

    this.currColor = this.currColor === power.OFF ? power.ON : power.OFF;
    this.powerElement.setAttribute('fill', this.currColor);
  }

  startToBlink(): void {
    this.interval = setInterval(() => this.blink(), this.intervalMs);
  }

  destroy(): void {
    clearInterval(this.interval);
  }
}
