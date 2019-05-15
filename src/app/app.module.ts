import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TwitterstreamComponent } from './twitterstream/twitterstream.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { DehighlightPipe } from './pipes/dehighlight.pipe';
import { UsernamePipe } from './pipes/username.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TwitterstreamComponent,
    HighlightPipe,
    DehighlightPipe,
    UsernamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
