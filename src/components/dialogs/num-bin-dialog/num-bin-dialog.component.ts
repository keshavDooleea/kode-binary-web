import { Component } from '@angular/core';
import {
  IDialogContent,
  IDialogFn,
} from 'src/interfaces/dialog-content.interface';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';

@Component({
  selector: 'app-num-bin-dialog',
  templateUrl: './num-bin-dialog.component.html',
  styleUrls: ['./num-bin-dialog.component.scss'],
})
export class NumBinDialogComponent implements IDialogFn {
  constructor(private localStorageService: LocalStorageService) {}

  getImgSrc(): string {
    const locale = this.localStorageService.languageStorage.getIb8nLang();
    return `assets/images/num_to_binary_instructions_${locale}.png`;
  }

  getGuideContent(): IDialogContent {
    return {
      titleKey: 'guide',
    };
  }

  getGoalContent(): IDialogContent {
    return {
      titleKey: 'numToBinDialog.goalKey',
      descriptionKey: 'numToBinDialog.goalDesc',
    };
  }

  getHowContent(): IDialogContent {
    return {
      titleKey: 'numToBinDialog.howToUseKey',
      descriptionKey: 'numToBinDialog.howToUseDesc',
    };
  }

  getNoteContent(): IDialogContent {
    return {
      titleKey: 'commonDialogNote.noteKey',
      descriptionKey: 'commonDialogNote.noteDesc',
    };
  }
}
