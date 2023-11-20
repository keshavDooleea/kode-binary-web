import { inject } from '@angular/core';
import { LcdService } from 'src/services/lcd/lcd.service';
import { LedsService } from 'src/services/leds/leds.service';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { SoundService } from 'src/services/sound/sound.service';
import { TranslationService } from 'src/services/translation/translation.service';
import { circuit } from 'src/utils/constants';
import { hideElement, showElement } from 'src/utils/functions';

export abstract class Circuit {
  private ledService: LedsService;
  private lcdService: LcdService;
  private soundService: SoundService;
  private localStorageService: LocalStorageService;
  private translationService: TranslationService;

  constructor() {
    this.ledService = inject(LedsService);
    this.lcdService = inject(LcdService);
    this.soundService = inject(SoundService);
    this.localStorageService = inject(LocalStorageService);
    this.translationService = inject(TranslationService);
  }

  init(): void {
    this.ledService.setPowerOn();
    this.ledService.blinkPowerLEDs();
    this.lcdService.writeZeros();
    this.lcdService.writeNum(0);
    this.lcdService.updateLanguage();

    hideElement(this.showWiresButton);
    this.toggleLangButtons();

    this.addButtonClass(this.helpButton);
    this.addButtonClass(this.showWiresButton);
    this.addButtonClass(this.hideWiresButton);
    this.addButtonClass(this.engLangButton);
    this.addButtonClass(this.frLangButton);
  }

  destroy(): void {
    this.ledService.onDestroy();
  }

  private toggleLangButtons(): void {
    const isEngLang = this.localStorageService.languageStorage.isEngLang();
    hideElement(isEngLang ? this.engLangButton : this.frLangButton);
    showElement(isEngLang ? this.frLangButton : this.engLangButton);

    this.translationService.updateLanguage();
  }

  get showWiresButton(): HTMLElement {
    return document.querySelector(
      `#${circuit.SHOW_WIRES_BUTTON}`
    ) as HTMLElement;
  }

  get hideWiresButton(): HTMLElement {
    return document.querySelector(
      `#${circuit.HIDE_WIRES_BUTTON}`
    ) as HTMLElement;
  }

  get engLangButton(): HTMLElement {
    return document.querySelector(`#${circuit.ENG_LANG_BUTTON}`) as HTMLElement;
  }

  get frLangButton(): HTMLElement {
    return document.querySelector(`#${circuit.FR_LANG_BUTTON}`) as HTMLElement;
  }

  get helpButton(): HTMLElement {
    return document.querySelector(`#${circuit.HELP_BUTTON}`) as HTMLElement;
  }

  addButtonClass(button: Element): void {
    button.classList.add('circuit-btn');
  }

  addCommonListeners(): void {
    this.showWiresButton.addEventListener('click', () =>
      this.toggleElementsOnCircuit(true)
    );
    this.hideWiresButton.addEventListener('click', () =>
      this.toggleElementsOnCircuit(false)
    );

    this.helpButton.addEventListener('click', () => {
      this.playButtonSound();
      this.onHelpButtonClicked();
    });

    this.addLangListener(this.engLangButton, () =>
      this.localStorageService.languageStorage.setToEnglish()
    );

    this.addLangListener(this.frLangButton, () =>
      this.localStorageService.languageStorage.setToFrench()
    );
  }

  private addLangListener(langButton: HTMLElement, cb: () => void): void {
    langButton.addEventListener('click', () => {
      this.playButtonSound();
      cb();
      this.toggleLangButtons();
      this.lcdService.updateAndBlinkLanguage();
    });
  }

  playButtonSound(): void {
    this.soundService.playButton();
  }

  abstract onHelpButtonClicked(): void;

  toggleElementsOnCircuit(shouldShow: boolean): void {
    const toggle = (selector: string): void => {
      document
        .querySelectorAll(selector)
        .forEach((el) =>
          el.setAttribute('display', shouldShow ? 'block' : 'none')
        );
    };

    this.playButtonSound();

    toggle(`#${circuit.WIRES} > *`);
    toggle(`#${circuit.RESISTORS} > *`);

    hideElement(shouldShow ? this.showWiresButton : this.hideWiresButton);
    showElement(shouldShow ? this.hideWiresButton : this.showWiresButton);
  }
}
