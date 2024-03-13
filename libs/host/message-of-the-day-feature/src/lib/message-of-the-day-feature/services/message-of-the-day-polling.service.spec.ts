import { TestBed } from '@angular/core/testing';

import { MessageOfTheDayPollingService } from './message-of-the-day-polling.service';

describe('MessageOfTheDayPollingService', () => {
  let service: MessageOfTheDayPollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageOfTheDayPollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
