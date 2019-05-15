import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevDay Twitterwall';
  private content: string;
  public query: string;

  public constructor() {

  }

}
