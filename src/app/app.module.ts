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
  ],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
