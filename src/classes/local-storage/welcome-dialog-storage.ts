import { AbsLocalStorage, ELocalStorage } from './abs-local-storage';

export class WelcomeDialogStorage extends AbsLocalStorage<boolean> {
  constructor() {
    super(ELocalStorage.welcomeDialog);
  }

  hideDialog(): void {
    this.setToStorage(true);
  }
}
