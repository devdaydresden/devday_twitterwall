import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,  HttpHeaders }    from '@angular/common/http';
import { Tweet } from '../class/tweet';
import { DATA } from '../mocks/tweets.mock';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  private apiURL: string;
  private searchString: string;
  private consumerKey: string;
  private consumerSecret: string;
  private accessToken: string;
  private tokenSecret: string;
  private authHeader: string;
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
    console.log('api call')
    return this.httpClient.get<Tweet[]>(this.apiURL, this.httpOptions).pipe(
      map(
        (
          result: any
        ) => {
          return result.tweets;
        }
      )
    )
  }

}
