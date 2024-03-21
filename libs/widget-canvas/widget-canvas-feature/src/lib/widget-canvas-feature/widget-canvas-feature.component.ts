import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivideDivDirective } from './directives/divide-div.directive';

type CssStyle = {[key: string]: string};

@Component({
  selector: 'widget-canvas-feature',
  standalone: true,
  imports: [CommonModule, DivideDivDirective],
  templateUrl: './widget-canvas-feature.component.html',
  styleUrl: './widget-canvas-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetCanvasFeatureComponent {
  @Input()
  public isRoot: boolean = true;

  @Input()
  public cssStyle: CssStyle = {};

  public readonly verticallySplitUpperDivStyle: CssStyle = {
    position: 'absolute',
    height: 'calc(50% - 2px)',
    top: '-2px',
    left: '-2px',
  };

  public readonly horizontallySplitUpperDivStyle: CssStyle = {
    position: 'absolute',
    height: '50%',
    top: 'calc(50% - 2px)',
    left: '-2px',
  };

  public isSplitHorizontally: boolean = false;
  public isSplitVertically: boolean = false;

  public divedeDivVertically(): void {
    this.isSplitVertically = true;
  }

  public divedeDivHorizontally(): void {
    alert('divided horizontally');
    this.isSplitHorizontally = true;
  }
}
