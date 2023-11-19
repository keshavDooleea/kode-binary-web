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
      title: 'Guide',
    };
  }

  getGoalContent(): IDialogContent {
    return {
      title: 'Goal',
      description:
        'Convert the number on the left screen to binary code displayed on the right screen.',
    };
  }

  getHowContent(): IDialogContent {
    return {
      title: 'How to use?',
      description: 'Use the blue buttons to create different combinations.',
    };
  }

  getNoteContent(): IDialogContent {
    return {
      title: 'Note',
      description:
        'When the answer is correct, a new number is generated. Then, a new round is automatically started after a few seconds.',
    };
  }
}
