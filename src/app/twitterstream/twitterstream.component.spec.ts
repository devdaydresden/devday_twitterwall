import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterstreamComponent } from './twitterstream.component';

describe('TwitterstreamComponent', () => {
  let component: TwitterstreamComponent;
  let fixture: ComponentFixture<TwitterstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
