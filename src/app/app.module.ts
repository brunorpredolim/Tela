import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
