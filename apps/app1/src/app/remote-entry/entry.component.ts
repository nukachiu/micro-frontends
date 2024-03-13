import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'my-micro-frontends-app1-entry',
  template: `<my-micro-frontends-nx-welcome></my-micro-frontends-nx-welcome>`,
})
export class RemoteEntryComponent {}
