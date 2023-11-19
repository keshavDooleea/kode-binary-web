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

@Component({
  selector: 'app-circuit-bin-to-num',
  templateUrl: './circuit-bin-to-num.component.html',
  styleUrls: ['./circuit-bin-to-num.component.scss'],
})
export class CircuitBinToNumComponent
  extends Circuit
  implements OnDestroy, OnInit
{
  @Output() numEmitter: EventEmitter<void> = new EventEmitter();

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
    const validateBtn = document.querySelector(`#${circuit.VALIDATE_BUTTON}`)!;
    this.addButtonClass(validateBtn);
    validateBtn.addEventListener('click', () => this.numEmitter.emit());

    this.helpButton.addEventListener('click', () =>
      this.dialogService.openBinNumDialog()
    );
  }
}
