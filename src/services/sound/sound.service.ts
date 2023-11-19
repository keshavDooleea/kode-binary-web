import { Injectable } from '@angular/core';
import { Sound } from 'src/classes/sound/sound';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private errorSound: Sound;
  private successSound: Sound;
  private buttonSound: Sound;

  constructor() {
    this.errorSound = new Sound('error.mp3');
    this.successSound = new Sound('success.mp3');
    this.buttonSound = new Sound('button.mp3');
  }

  playError(): void {
    this.errorSound.play();
  }

  playSuccess(): void {
    this.successSound.play();
  }

  playButton(): void {
    this.buttonSound.play();
  }
}
