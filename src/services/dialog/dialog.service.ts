import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type DialogT = 'numToBin' | 'binToNum' | 'welcome';
export type Dialog = Map<DialogT, boolean>;

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _dialogs: Dialog;
  private subject: Subject<Dialog>;

  constructor() {
    this._dialogs = new Map();
    this.subject = new Subject();
  }

  private toggleTo(newType: DialogT, value: boolean): void {
    this.closeAll();
    this._dialogs.set(newType, value);
    this.subject.next(this._dialogs);
  }

  closeAll(): void {
    for (let [type, _] of this._dialogs) {
      this._dialogs.set(type, false);
    }
  }

  openNumBinDialog(): void {
    this.toggleTo('numToBin', true);
  }

  openBinNumDialog(): void {
    this.toggleTo('binToNum', true);
  }

  openWelcomeDialog(): void {
    this.toggleTo('welcome', true);
  }

  listen(): Observable<Dialog> {
    return this.subject.asObservable();
  }
}
