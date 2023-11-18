import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dialog, DialogService } from 'src/services/dialog/dialog.service';

@Component({
  selector: 'app-main-dialogs',
  templateUrl: './main-dialogs.component.html',
  styleUrls: ['./main-dialogs.component.scss'],
})
export class MainDialogsComponent implements OnInit, OnDestroy {
  dialogMap: Dialog = new Map();
  subscription: Subscription;

  constructor(private dialogService: DialogService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.dialogService
      .listen()
      .subscribe((dialogMap: Dialog) => (this.dialogMap = dialogMap));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get isNumToBinOpen(): boolean {
    return this.dialogMap.get('numToBin') ?? false;
  }

  get isBinToNumOpen(): boolean {
    return this.dialogMap.get('binToNum') ?? false;
  }
}
