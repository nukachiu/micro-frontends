import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostLibComponent } from 'libs/host/host-lib/src/lib/host-lib/host-lib.component';

@Component({
  standalone: true,
  imports: [RouterModule, HostLibComponent],
  selector: 'my-micro-frontends-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';
}
