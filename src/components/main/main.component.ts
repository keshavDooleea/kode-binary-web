import { Component, OnDestroy } from '@angular/core';
import { Router } from 'src/classes/router/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends Router implements OnDestroy {
  ngOnDestroy(): void {
    this.routerDestroy();
  }
}
