import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Circuit } from 'src/classes/circuit-component/circuit';
import { circuit } from 'src/utils/constants';

@Component({
  selector: 'app-circuit-bin-to-num',
  templateUrl: './circuit-bin-to-num.component.html',
  styleUrls: ['./circuit-bin-to-num.component.scss'],
})
export class CircuitBinToNumComponent extends Circuit implements OnInit {
  @Output() numEmitter: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    super.init();
    this.addClickListener();
  }

  private addClickListener(): void {
    const validateBtn = document.querySelector(`#${circuit.VALIDATE_BUTTON}`)!;
    this.addButtonClass(validateBtn);
    validateBtn.addEventListener('click', () => this.numEmitter.emit());
  }
}
