import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { APP_TITLE } from 'src/utils/constants';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
})
export class WelcomeDialogComponent {
  @ViewChild('welcomeDialogInput') welcomeDialogInput!: ElementRef;

  constructor(private localStorageService: LocalStorageService) {}

  onPopupInputChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.localStorageService.welcomeDialogStorage.setToStorage(isChecked);
  }

  get appTitle(): string {
    return APP_TITLE;
  }
}
