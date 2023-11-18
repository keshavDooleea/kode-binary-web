import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LedsService } from 'src/services/leds/leds.service';
import { circuit } from 'src/utils/constants';
import { getByteFromText } from 'src/utils/functions';

@Component({
  selector: 'app-circuit-svg',
  templateUrl: './circuit-svg.component.html',
  styleUrls: ['./circuit-svg.component.scss'],
})
export class CircuitSvgComponent implements OnInit {
  @Output() byteEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private ledService: LedsService) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.ledService.setPowerOn();
    this.addClickListeners();
  }

  private addClickListeners(): void {
    document.querySelectorAll(`#${circuit.BUTTONS}`).forEach((byteButton) => {
      byteButton.addEventListener('click', (event) => {
        const button = ((event as MouseEvent).target as HTMLElement)
          .parentElement;

        this.byteEmitter.emit(getByteFromText(button?.id!));
      });
    });
  }
}
