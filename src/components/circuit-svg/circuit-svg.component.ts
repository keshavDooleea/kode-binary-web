import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { circuit } from 'src/utils/constants';
import { getByteFromText } from 'src/utils/functions';

@Component({
  selector: 'app-circuit-svg',
  templateUrl: './circuit-svg.component.html',
  styleUrls: ['./circuit-svg.component.scss'],
})
export class CircuitSvgComponent implements OnInit {
  @Output() byteEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    document.querySelectorAll(`#${circuit.BUTTONS}`).forEach((byteButton) => {
      byteButton.addEventListener('click', (event) => {
        const button = ((event as MouseEvent).target as HTMLElement)
          .parentElement;

        this.byteEmitter.emit(getByteFromText(button?.id!));
      });
    });
  }
}
