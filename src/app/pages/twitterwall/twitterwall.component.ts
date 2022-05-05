import { Component, OnInit } from '@angular/core';
import { mergeMap, Subject, timer } from 'rxjs';
import { Tweet } from 'src/app/components/tweet/tweet.component';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-twitterwall',
  templateUrl: './twitterwall.component.html',
  styleUrls: ['./twitterwall.component.scss'],
})
export class TwitterwallComponent implements OnInit {

  public tweets$ : Subject<Tweet[]> = new Subject();

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    /*this.tweetService.getTweetsAPI().subscribe((tweets : Tweet[]) => {
      this.tweets$.next(tweets);
    })*/
    timer(0, 20000)
    .pipe(
      mergeMap(() => this.tweetService.getTweetsAPI())
      )
      .subscribe(tweets =>
        this.tweets$.next(tweets)
      );
  }

  trackByItems(index: number, item: Tweet): number { return item.id; }

}
