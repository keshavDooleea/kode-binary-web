import { Component, HostListener, Input } from '@angular/core';
import { DialogService } from 'src/services/dialog/dialog.service';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss'],
})
export class DialogLayoutComponent {
  @Input() subtitle!: string;

  constructor(private dialogService: DialogService) {}

  @HostListener('click', ['$event'])
  onModalClicked(event: MouseEvent) {
    const element = event.target as HTMLElement;

    if (element.classList[0] === 'modal') {
      this.close();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeyClicked() {
    this.close();
  }

  close(): void {
    this.dialogService.closeAll();
  }
}
