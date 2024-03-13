import { Inject, Injectable, inject } from '@angular/core';
import { MessageOfTheDayHttpService } from './message-of-the-day-http.service';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  interval,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';
import { IMessageOfTheDayHttpService } from './interfaces/message-of-the-day-http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageOfTheDayPollingService {
  private readonly DEFAULT_INTERVAL = 5000;

  private _messageOfTheDayHttpService: MessageOfTheDayHttpService = inject(
    MessageOfTheDayHttpService
  );

  private _numberOfMilisecondsInterval$: Subject<number> =
    new BehaviorSubject<number>(this.DEFAULT_INTERVAL);

  private _temp: Observable<number> = this._numberOfMilisecondsInterval$.pipe(
    switchMap((miliseconds: number) =>
      interval(miliseconds).pipe(startWith(0))
    ),
    shareReplay(1)
  );

  private _messagesOfTheDay$: Observable<string[]> = this._temp.pipe(
    switchMap((_) => this._messageOfTheDayHttpService.getMessages())
  );
  constructor() {
    this._numberOfMilisecondsInterval$.next(this.DEFAULT_INTERVAL);
    // this._temp.subscribe(x => console.log(`temp => ${x}`));
    // this._messagesOfTheDay$.subscribe(console.log);
  }

  public get messagesOfTheDay(): Observable<string[]> {
    return this._messagesOfTheDay$;
  }
}
