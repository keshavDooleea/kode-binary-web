import { AbsLocalStorage, ELocalStorage } from './abs-local-storage';

enum ELanguage {
  eng = 'Eng',
  fr = 'Fr',
}

export class LanguageStorage extends AbsLocalStorage<ELanguage> {
  private defaultLang = ELanguage.eng;

  constructor() {
    super(ELocalStorage.language);
  }

  getLanguage(): ELanguage {
    const lang = this.getFromStorage();
    return lang ?? this.defaultLang;
  }

  getFullLanguage(): string {
    switch (this.getLanguage()) {
      case ELanguage.eng:
        return 'English';
      case ELanguage.fr:
        return 'Français';
    }
  }

  isEngLang(): boolean {
    return this.getLanguage() === ELanguage.eng;
  }

  setToEnglish(): void {
    this.setToStorage(ELanguage.eng);
  }

  setToFrench(): void {
    this.setToStorage(ELanguage.fr);
  }
}
