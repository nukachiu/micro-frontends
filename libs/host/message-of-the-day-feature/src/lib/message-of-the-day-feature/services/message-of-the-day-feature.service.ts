import { Injectable, OnInit, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  combineLatest,
  interval,
  map,
  merge,
  of,
  scan,
  shareReplay,
  startWith,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { MessageOfTheDayHttpService } from './message-of-the-day-http.service';
import { MessageOfTheDayPollingService } from './message-of-the-day-polling.service';

type DirectionMessage = 'up' | 'down';

@Injectable({
  providedIn: 'root',
})
export class MessageOfTheDayFeatureService {
  private _messageOfTheDayHttpPolling: MessageOfTheDayPollingService = inject(
    MessageOfTheDayPollingService
  );

  private _messagesOfTheDayList$: Observable<string[]> =
    this._messageOfTheDayHttpPolling.messagesOfTheDay;
  private _numberOfMessages: Observable<number> =
    this._messagesOfTheDayList$.pipe(
      map((messagesOfTheDayList: string[]) => messagesOfTheDayList.length)
    );

  private _directionByKeys: Subject<DirectionMessage> =
    new Subject<DirectionMessage>();

  private _directionByInterval: Observable<DirectionMessage> = interval(
    5000
  ).pipe(map((_) => 'up'));

  private _direction: Observable<DirectionMessage> = merge(
    this._directionByKeys,
    this._directionByInterval
  );

  private _currentMessageIndex$ = this._direction.pipe(
    withLatestFrom(this._numberOfMessages),
    scan(
      (
        index: number,
        [direction, numberOfMessages]: [DirectionMessage, number]
      ) => {
        console.log('mor');
        if (direction === 'up') {
          if (index === numberOfMessages - 1) {
            return 0;
          }
          return index + 1;
        }
        if (index === 0) {
          return numberOfMessages - 1;
        }
        return index - 1;
      },
      0
    ),
    startWith(0)
  );

  private _currentMessageOfTheDay$: Observable<string> = combineLatest([
    this._messagesOfTheDayList$,
    this._currentMessageIndex$,
  ]).pipe(
    map(
      ([messagesOfTheDayList, currentIndex]: [string[], number]) =>
        messagesOfTheDayList[currentIndex]
    )
  );

  public constructor() {}

  public get currentMessageOfTheDay(): Observable<string> {
    return this._currentMessageOfTheDay$;
  }

  public get currentIndexOfMessages(): Observable<number> {
    return this._currentMessageIndex$;
  }

  public get numberOfAllMessages(): Observable<number> {
    return this._numberOfMessages;
  }

  public getNextMessage(): void {
    this._directionByKeys.next('up');
  }

  public getPreviousMessage(): void {
    this._directionByKeys.next('down');
  }
}
