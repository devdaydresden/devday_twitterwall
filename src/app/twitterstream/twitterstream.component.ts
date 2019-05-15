import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../services/tweets.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { Tweet } from '../class/tweet';


@Component({
  selector: 'app-twitterstream',
  templateUrl: './twitterstream.component.html',
  styleUrls: ['./twitterstream.component.scss']
})
export class TwitterstreamComponent implements OnInit {

  private content: string;
  public query: string;
  public tweets: Tweet[];

  public constructor(private tweetService: TweetsService) {

  }

  ngOnInit() {
    interval(60000)
      .pipe(
        startWith(0),
        switchMap(() => this.tweetService.getTweetsAPI())
      )
      .subscribe((tweets:Tweet[]) => {
        this.tweets = tweets;
      })
    ;
  }

}
