import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type CssStyle = {[key: string]: string};

@Component({
  selector: 'widget-canvas-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-canvas-feature.component.html',
  styleUrl: './widget-canvas-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetCanvasFeatureComponent {
  @Input()
  public isRoot: boolean = true;

  @Input()
  public cssStyle: CssStyle = {};

  public readonly verticallySplitTopDivStyle: CssStyle = {
    position: 'relative',
    height: 'calc(50% - 2px)',
    top: '-2px',
    left: '-2px',
  };

  public readonly verticallySplitDownDivStyle: CssStyle = {
    position: 'relative',
    width: '100%',
    height: '50%',
    top: '-4px',
    left: '-2px',
  };

  public readonly horizontallySplitDivStyle: CssStyle = {
    width: '100%',
    position: 'relative',
    top: '-2px',
    left: '-2px',
  };

  public isSplitHorizontally: boolean = false;
  public isSplitVertically: boolean = false;

  public divedeDivVertically(e: Event): void {
    e.stopPropagation();
    this.isSplitVertically = true;
  }

  public divedeDivHorizontally(e: Event): void {
    e.stopPropagation();
    this.isSplitHorizontally = true;
  }

  @HostListener('click', ['$event'])
  public onClick(e: Event) {
    e.stopPropagation();
    console.log(123);
  }
}
