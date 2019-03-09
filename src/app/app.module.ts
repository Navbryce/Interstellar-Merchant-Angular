import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// angular components
import { PlayerCreateComponent } from './player-create';
import { PlayerDisplayComponent } from './player-display';
@NgModule({
  declarations: [
    AppComponent,
    PlayerCreateComponent,
    PlayerDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
