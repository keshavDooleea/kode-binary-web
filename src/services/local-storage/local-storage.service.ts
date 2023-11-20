import { Injectable } from '@angular/core';
import { LanguageStorage } from 'src/classes/local-storage/language-storage';
import { WelcomeDialogStorage } from 'src/classes/local-storage/welcome-dialog-storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _welcomeDialogStorage: WelcomeDialogStorage;
  private _languageStorage: LanguageStorage;

  constructor() {
    this._welcomeDialogStorage = new WelcomeDialogStorage();
    this._languageStorage = new LanguageStorage();
  }

  get welcomeDialogStorage(): WelcomeDialogStorage {
    return this._welcomeDialogStorage;
  }

  get languageStorage(): LanguageStorage {
    return this._languageStorage;
  }
}
