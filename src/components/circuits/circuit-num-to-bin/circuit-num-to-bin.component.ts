import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Circuit } from 'src/classes/circuit-component/circuit';
import { DialogService } from 'src/services/dialog/dialog.service';
import { circuit } from 'src/utils/constants';
import { getByteFromText } from 'src/utils/functions';

@Component({
  selector: 'app-circuit-num-to-bin',
  templateUrl: './circuit-num-to-bin.component.html',
  styleUrls: ['./circuit-num-to-bin.component.scss'],
})
export class CircuitNumToBinComponent
  extends Circuit
  implements OnInit, OnDestroy
{
  @Output() byteEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private dialogService: DialogService) {
    super();
  }

  ngOnInit(): void {
    super.init();
    this.addClickListeners();
    this.addCommonListeners();
  }

  ngOnDestroy(): void {
    super.destroy();
  }

  private addClickListeners(): void {
    document.querySelectorAll(`#${circuit.BUTTONS}`).forEach((byteButton) => {
      this.addButtonClass(byteButton);

      byteButton.addEventListener('click', (event) => {
        const button = ((event as MouseEvent).target as HTMLElement)
          .parentElement;

        this.byteEmitter.emit(getByteFromText(button?.id!));
      });
    });

    this.helpButton.addEventListener('click', () =>
      this.dialogService.openNumBinDialog()
    );
  }
}
