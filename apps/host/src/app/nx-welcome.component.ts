import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-micro-frontends-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `Hello, I am the host!`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
