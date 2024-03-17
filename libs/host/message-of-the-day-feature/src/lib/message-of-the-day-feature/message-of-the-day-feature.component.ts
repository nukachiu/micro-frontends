import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { MessageOfTheDayFeatureService } from './services/message-of-the-day-feature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-micro-frontends-message-of-the-day-feature',
  standalone: true,
  imports: [CommonModule, LetDirective],
  templateUrl: './message-of-the-day-feature.component.html',
  styleUrl: './message-of-the-day-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageOfTheDayFeatureComponent {
  private _messageOfTheDayService: MessageOfTheDayFeatureService = inject(
    MessageOfTheDayFeatureService
  );
  public currentMessageOfTheDay$: Observable<string> =
    this._messageOfTheDayService.currentMessageOfTheDay;

  public totalNumberOfMessages$: Observable<number> =
    this._messageOfTheDayService.numberOfAllMessages;
  public currentMessageIndex$: Observable<number> =
    this._messageOfTheDayService.currentIndexOfMessages;

  public upArrowClick(): void {
    this._messageOfTheDayService.getNextMessage();
  }

  public downArrowClick(): void {
    this._messageOfTheDayService.getPreviousMessage();
  }
}
