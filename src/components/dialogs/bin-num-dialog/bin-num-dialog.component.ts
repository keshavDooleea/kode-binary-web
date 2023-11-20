import { Component } from '@angular/core';
import {
  IDialogContent,
  IDialogFn,
} from 'src/interfaces/dialog-content.interface';

@Component({
  selector: 'app-bin-num-dialog',
  templateUrl: './bin-num-dialog.component.html',
  styleUrls: ['./bin-num-dialog.component.scss'],
})
export class BinNumDialogComponent implements IDialogFn {
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
