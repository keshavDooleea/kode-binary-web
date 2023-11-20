import { Component, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from 'src/services/dialog/dialog.service';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
})
export class WelcomeDialogComponent {
  @ViewChild('welcomeDialogInput') welcomeDialogInput!: ElementRef;

  constructor(
    private localStorageService: LocalStorageService,
    private dialogService: DialogService
  ) {}

  get isWelcomeInputChecked(): boolean {
    return this.welcomeDialogInput?.nativeElement?.checked ?? false;
  }

  savePref(): void {
    if (!this.isWelcomeInputChecked) return;

    this.localStorageService.welcomeDialogStorage.hideDialog();
    this.dialogService.closeAll();
  }
}
