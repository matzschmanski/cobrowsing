import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, PdfViewerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
