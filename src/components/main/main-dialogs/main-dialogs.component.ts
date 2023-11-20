import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dialog, DialogService } from 'src/services/dialog/dialog.service';

@Component({
  selector: 'app-main-dialogs',
  templateUrl: './main-dialogs.component.html',
  styleUrls: ['./main-dialogs.component.scss'],
})
export class MainDialogsComponent implements OnInit, OnDestroy {
  dialogMap: Dialog;
  subscription: Subscription;

  constructor(private dialogService: DialogService) {
    this.dialogMap = new Map();
    this.subscription = new Subscription();

    this.listenToDialogs();
  }

  ngOnInit(): void {
    this.openWelcomeDialog();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenToDialogs(): void {
    this.subscription = this.dialogService
      .listen()
      .subscribe((dialogMap: Dialog) => (this.dialogMap = dialogMap));
  }

  private openWelcomeDialog(): void {
    // check local storage
    this.dialogService.openWelcomeDialog();
  }

  get isNumToBinOpen(): boolean {
    return this.dialogMap.get('numToBin') ?? false;
  }

  get isBinToNumOpen(): boolean {
    return this.dialogMap.get('binToNum') ?? false;
  }

  get isWelcomeOpen(): boolean {
    return this.dialogMap.get('welcome') ?? false;
  }
}
