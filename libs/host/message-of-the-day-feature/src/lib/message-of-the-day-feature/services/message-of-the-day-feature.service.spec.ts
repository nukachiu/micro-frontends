import { TestBed } from '@angular/core/testing';

import { MessageOfTheDayFeatureService } from './message-of-the-day-feature.service';

describe('MessageOfTheDayFeatureService', () => {
  let service: MessageOfTheDayFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageOfTheDayFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
