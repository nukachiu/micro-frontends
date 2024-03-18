import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageOfTheDayFeatureComponent } from 'libs/host/message-of-the-day-feature/src/lib/message-of-the-day-feature/message-of-the-day-feature.component';

@Component({
  selector: 'my-micro-frontends-host-lib',
  standalone: true,
  imports: [CommonModule, MessageOfTheDayFeatureComponent],
  templateUrl: './host-lib.component.html',
  styleUrl: './host-lib.component.css',
})
export class HostLibComponent {}
