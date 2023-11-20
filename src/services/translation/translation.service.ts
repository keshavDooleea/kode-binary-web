import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LanguageStorage } from 'src/classes/local-storage/language-storage';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languageStorage: LanguageStorage;

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService
  ) {
    this.languageStorage = this.localStorageService.languageStorage;
    this.init();
  }

  private init(): void {
    this.translate.setDefaultLang(this.languageStorage.getDefaultIb8nLang());
    this.updateLanguage();
  }

  updateLanguage(): void {
    this.translate.use(this.languageStorage.getIb8nLang());
  }
}
