import { Component } from '@angular/core';
import {
  IDialogContent,
  IDialogFn,
} from 'src/interfaces/dialog-content.interface';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';

@Component({
  selector: 'app-bin-num-dialog',
  templateUrl: './bin-num-dialog.component.html',
  styleUrls: ['./bin-num-dialog.component.scss'],
})
export class BinNumDialogComponent implements IDialogFn {
  constructor(private localStorageService: LocalStorageService) {}

  getImgSrc(): string {
    const locale = this.localStorageService.languageStorage.getIb8nLang();
    return `assets/images/binary_to_num_instructions_${locale}.png`;
  }

  getGuideContent(): IDialogContent {
    return {
      titleKey: 'guide',
    };
  }

  getGoalContent(): IDialogContent {
    return {
      titleKey: 'binToNumDialog.goalKey',
      descriptionKey: 'binToNumDialog.goalDesc',
    };
  }

  getHowContent(): IDialogContent {
    return {
      titleKey: 'binToNumDialog.howToUseKey',
      descriptionKey: 'binToNumDialog.howToUseDesc',
    };
  }
}
