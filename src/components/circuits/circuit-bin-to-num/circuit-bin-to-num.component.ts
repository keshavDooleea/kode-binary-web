import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { AbsCircuit } from 'src/classes/abs-components/circuit';
import { DialogService } from 'src/services/dialog/dialog.service';

@Component({
  selector: 'app-circuit-bin-to-num',
  templateUrl: './circuit-bin-to-num.component.html',
  styleUrls: ['./circuit-bin-to-num.component.scss'],
})
export class CircuitBinToNumComponent
  extends AbsCircuit
  implements OnDestroy, OnInit
{
  @Output() validateBtnEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private dialogService: DialogService) {
    super();
  }

  ngOnInit(): void {
    super.init();
    this.addCommonListeners();
  }

  ngOnDestroy(): void {
    super.destroy();
  }

  override onHelpButtonClicked(): void {
    this.dialogService.openBinNumDialog();
  }

  override onValidateButtonClicked(): void {
    this.validateBtnEmitter.emit();
  }
}
