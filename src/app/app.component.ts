import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from './components/tweet/tweet.component';
import { TweetService } from './services/tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitterwall';
}
