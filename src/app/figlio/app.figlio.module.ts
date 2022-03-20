import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppFiglio } from './app.figlio.component';

@NgModule({
  declarations: [
    AppFiglio
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppFiglio]
})
export class AppModule { }
