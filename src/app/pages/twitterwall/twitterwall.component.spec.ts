import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterwallComponent } from './twitterwall.component';

describe('TwitterwallComponent', () => {
  let component: TwitterwallComponent;
  let fixture: ComponentFixture<TwitterwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterwallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
