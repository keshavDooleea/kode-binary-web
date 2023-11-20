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

  getDefaultLang(): ELanguage {
    return this.defaultLang;
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

  private getIb8nFromEnum(eLang: ELanguage): string {
    switch (eLang) {
      case ELanguage.eng:
        return 'en';
      case ELanguage.fr:
        return 'fr';
    }
  }

  getIb8nLang(): string {
    return this.getIb8nFromEnum(this.getLanguage());
  }

  getDefaultIb8nLang(): string {
    return this.getIb8nFromEnum(this.getDefaultLang());
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
