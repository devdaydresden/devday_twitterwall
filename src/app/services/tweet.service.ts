import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from '../components/tweet/tweet.component';

interface ApiTweet {
  id: number,
  location: string,
  profileImage: string,
  screenName: string,
  text: string,
  time: string
}

interface ApiTweets {
  tweets: ApiTweet[];
}
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiURL: string;
  private httpOptions : any;
  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiURL;
    this.httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
    };
  }

  public getTweetsAPI() : Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>(this.apiURL, this.httpOptions).pipe(
      map(
        (
          result: any
        ) => {
          return result.tweets;
        }
      ),
      map(tweets => tweets.filter((r: Tweet) => r.text.indexOf('RT') == -1))
    )
  }

}
