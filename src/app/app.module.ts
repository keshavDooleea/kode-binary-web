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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainNumberBinaryComponent,
    MainBinaryNumberComponent,
    CircuitNumToBinComponent,
    CircuitBinToNumComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
