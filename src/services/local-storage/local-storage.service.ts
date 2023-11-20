import { Injectable } from '@angular/core';
import { WelcomeDialogStorage } from 'src/classes/local-storage/welcome-dialog-storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _welcomeDialogStorage: WelcomeDialogStorage;

  constructor() {
    this._welcomeDialogStorage = new WelcomeDialogStorage();
  }

  get welcomeDialogStorage(): WelcomeDialogStorage {
    return this._welcomeDialogStorage;
  }
}
