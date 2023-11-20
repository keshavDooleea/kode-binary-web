import { APP_TITLE } from 'src/utils/constants';

export enum ELocalStorage {
  welcomeDialog = 'hideWelcomeDialog',
  language = 'language',
}

export class AbsLocalStorage<T> {
  protected key: string;

  constructor(protected subkey: ELocalStorage) {
    this.key = `${APP_TITLE}-${subkey}`;
  }

  protected setToStorage(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  getFromStorage(): T | null {
    const value = localStorage.getItem(this.key);
    return value ? JSON.parse(value) : null;
  }
}
