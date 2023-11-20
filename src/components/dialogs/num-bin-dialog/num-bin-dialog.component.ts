import { Component } from '@angular/core';
import {
  IDialogContent,
  IDialogFn,
} from 'src/interfaces/dialog-content.interface';

@Component({
  selector: 'app-num-bin-dialog',
  templateUrl: './num-bin-dialog.component.html',
  styleUrls: ['./num-bin-dialog.component.scss'],
})
export class NumBinDialogComponent implements IDialogFn {
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
}
