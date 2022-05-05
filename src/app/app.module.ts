import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TwitterwallComponent } from './pages/twitterwall/twitterwall.component';
import { DehighlightPipe } from './pipes/dehighlight.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { UsernamePipe } from './pipes/username.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TwitterwallComponent,
    DehighlightPipe,
    HighlightPipe,
    UsernamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
