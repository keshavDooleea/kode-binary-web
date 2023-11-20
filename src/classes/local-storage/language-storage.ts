import { AbsLocalStorage, ELocalStorage } from './abs-local-storage';

export enum ELanguage {
  eng = 'Eng',
  fr = 'Fr',
}

export class LanguageStorage extends AbsLocalStorage<ELanguage> {
  constructor() {
    super(ELocalStorage.language);
  }
}
