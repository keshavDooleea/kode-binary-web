import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from 'src/classes/router/router';
import { Dialog, DialogService } from 'src/services/dialog/dialog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends Router implements OnInit, OnDestroy {
  dialogMap: Dialog = new Map();

  constructor(private dialogService: DialogService) {
    super();
  }

  ngOnInit(): void {
    this.dialogService
      .listen()
      .subscribe((dialogMap: Dialog) => (this.dialogMap = dialogMap));
  }

  get isNumToBinOpen(): boolean {
    return this.dialogMap.get('numToBin') ?? false;
  }

  get isBinToNumOpen(): boolean {
    return this.dialogMap.get('binToNum') ?? false;
  }

  ngOnDestroy(): void {
    this.routerDestroy();
  }
}
