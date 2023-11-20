import { inject } from '@angular/core';
import { ByteService } from 'src/services/byte/byte.service';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';
import { SoundService } from 'src/services/sound/sound.service';
import { Confetti } from '../confetti/confetti';

export abstract class AbsMain {
  protected soundService: SoundService;
  protected byteService: ByteService;
  protected ledService: LedsService;
  protected lcdService: LcdService;

  lockComponent = false;

  constructor() {
    this.soundService = inject(SoundService);
    this.byteService = inject(ByteService);
    this.ledService = inject(LedsService);
    this.lcdService = inject(LcdService);
  }

  async onValidateClicked(): Promise<void> {
    this.soundService.playButton();
    this.lockComponent = true;

    if (!this.isMatch()) {
      this.lcdService.writeError();
      this.soundService.playError();
      await this.ledService.blinkError();
      this.lcdService.updateBinaryCode();
      this.ledService.setPowerOn();
      this.lockComponent = false;
      return;
    }

    Confetti.throwRandom();
    this.lcdService.writeSuccess();
    this.soundService.playSuccess();
    await this.ledService.blinkPower();
    setTimeout(() => this.generateNewByte(), 2000);
  }

  abstract isMatch(): boolean;
  abstract generateNewByte(): void;
}
