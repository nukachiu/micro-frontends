import { TestBed } from '@angular/core/testing';

import { MessageOfTheDayHttpService } from './message-of-the-day-http.service';

describe('MessageOfTheDayHttpService', () => {
  let service: MessageOfTheDayHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageOfTheDayHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
