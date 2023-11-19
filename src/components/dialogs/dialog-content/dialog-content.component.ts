import { Component, Input } from '@angular/core';
import { IDialogContent } from 'src/interfaces/dialog-content.interface';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent {
  @Input() dialogContent!: IDialogContent;
}
