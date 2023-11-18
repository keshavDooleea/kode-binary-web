import { Component, OnInit } from '@angular/core';
import { Circuit } from 'src/classes/circuit-component/circuit';

@Component({
  selector: 'app-circuit-bin-to-num',
  templateUrl: './circuit-bin-to-num.component.html',
  styleUrls: ['./circuit-bin-to-num.component.scss'],
})
export class CircuitBinToNumComponent extends Circuit implements OnInit {
  ngOnInit(): void {
    super.init();
  }
}
