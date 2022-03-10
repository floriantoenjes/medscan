import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MedscanModule} from './medscan/medscan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MedscanModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
