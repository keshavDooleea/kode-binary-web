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
      title: 'Guide',
    };
  }

  getGoalContent(): IDialogContent {
    return {
      title: 'Goal',
      description:
        'Convert binary code on the left screen to number displayed on the right screen.',
    };
  }

  getHowContent(): IDialogContent {
    return {
      title: 'How to use?',
      description:
        'Use the right screen to directly edit the number on it.\n Press the validate button to confirm your answer.',
    };
  }

  getNoteContent(): IDialogContent {
    return {
      title: 'Note',
      description:
        'When the answer is correct, a new binary code is generated. Then, a new round is automatically started after a few seconds.',
    };
  }
}
