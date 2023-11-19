import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from '../components/main/main.component';
import { MainNumberBinaryComponent } from '../components/main/main-number-binary/main-number-binary.component';
import { MainBinaryNumberComponent } from '../components/main/main-binary-number/main-binary-number.component';
import { CircuitNumToBinComponent } from '../components/circuits/circuit-num-to-bin/circuit-num-to-bin.component';
import { CircuitBinToNumComponent } from '../components/circuits/circuit-bin-to-num/circuit-bin-to-num.component';
import { NumBinDialogComponent } from '../components/dialogs/num-bin-dialog/num-bin-dialog.component';
import { BinNumDialogComponent } from '../components/dialogs/bin-num-dialog/bin-num-dialog.component';
import { DialogLayoutComponent } from '../components/dialogs/dialog-layout/dialog-layout.component';
import { MainDialogsComponent } from '../components/main/main-dialogs/main-dialogs.component';
import { WatermarkComponent } from '../components/watermarks/watermark/watermark.component';
import { WatermarkItemComponent } from '../components/watermarks/watermark-item/watermark-item.component';
import { DialogContentComponent } from '../components/dialogs/dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainNumberBinaryComponent,
    MainBinaryNumberComponent,
    CircuitNumToBinComponent,
    CircuitBinToNumComponent,
    NumBinDialogComponent,
    BinNumDialogComponent,
    DialogLayoutComponent,
    MainDialogsComponent,
    WatermarkComponent,
    WatermarkItemComponent,
    DialogContentComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
