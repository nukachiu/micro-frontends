import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-micro-frontends-host-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-lib.component.html',
  styleUrl: './host-lib.component.css',
})
export class HostLibComponent {}
