export class Sound {
  private audio: HTMLAudioElement;

  constructor(private soundName: string) {
    this.audio = new Audio(`../assets/audios/${this.soundName}`);
    this.audio.load();
  }

  play(): void {
    this.audio.play();
  }
}
