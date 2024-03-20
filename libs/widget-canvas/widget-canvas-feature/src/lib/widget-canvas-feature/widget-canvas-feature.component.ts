import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivideDivDirective } from './directives/divide-div.directive';

@Component({
  selector: 'my-micro-frontends-widget-canvas-feature',
  standalone: true,
  imports: [CommonModule, DivideDivDirective],
  templateUrl: './widget-canvas-feature.component.html',
  styleUrl: './widget-canvas-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetCanvasFeatureComponent {
  public isSplitHorizontally: boolean = false;
  public isSplitVertically: boolean = false;

  public divedeDivVertically(): void {
    alert('divided vertically');
    this.isSplitVertically = true;
  }

  public divedeDivHorizontally(): void {
    alert('divided horizontally');
    this.isSplitHorizontally = true;
  }
}
