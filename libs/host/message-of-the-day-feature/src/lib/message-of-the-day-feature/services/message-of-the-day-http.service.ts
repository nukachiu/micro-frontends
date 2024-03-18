import { Injectable } from '@angular/core';
import { IMessageOfTheDayHttpService } from './interfaces/message-of-the-day-http-service.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageOfTheDayHttpService implements IMessageOfTheDayHttpService {
  getMessages(): Observable<string[]> {
    const messages: string[] = ['Message 1', 'Message 2', 'Message 3'];
    return of(messages);
  }
}
