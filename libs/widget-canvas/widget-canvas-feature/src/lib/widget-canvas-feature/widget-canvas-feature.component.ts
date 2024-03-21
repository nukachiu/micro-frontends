import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

type CssStyle = { [key: string]: string };

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

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined;

    
  public backgroundColor = '';

  public constructor(private readonly _resolver: ComponentFactoryResolver) {
    this.backgroundColor= this._createRandomColor();
  }

  public readonly horizontallySplitTopDivStyle: CssStyle = {
    position: 'relative',
    height: 'calc(50% - 2px)',
    width: '100%',
    top: '-2px',
    left: '-2px',
  };

  public readonly horizontallySplitDownDivStyle: CssStyle = {
    position: 'relative',
    width: '100%',
    height: '50%',
    top: '-4px',
    left: '-2px',
  };

  public readonly verticallySplitDivStyle: CssStyle = {
    width: '100%',
    position: 'relative',
    height: '100%',
    top: '-2px',
    left: '-2px',
  };

  public isSplitHorizontally: boolean = false;
  public isSplitVertically: boolean = false;

  public isRemoteComponentLoaded: boolean = false;

  public divedeDivVertically(e: Event): void {
    e.stopPropagation();
    this.isSplitVertically = true;
  }

  public divedeDivHorizontally(e: Event): void {
    e.stopPropagation();
    this.isSplitHorizontally = true;
  }

  public loadComponent() {
    // const componentType = null;
    const factory = this._resolver.resolveComponentFactory(SimpleComponentOne);
    this.container?.clear();
    const componentRef = this.container?.createComponent(factory);
    this.isRemoteComponentLoaded = true;
  }

  @HostListener('click', ['$event'])
  public onClick(e: Event) {
    e.stopPropagation();
    this.loadComponent();
  }

  private _createRandomColor(): string {
    const r = Math.floor(Math.random() * 256); // Random number between 0 and 255 for red
    const g = Math.floor(Math.random() * 256); // Random number between 0 and 255 for green
    const b = Math.floor(Math.random() * 256); // Random number between 0 and 255 for blue

    return `rgb(${r}, ${g}, ${b})`;
  }
}


@Component({
  selector: 'app-simple-component-one',
  template: `<p>Simple Component One works!</p>`,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
})
export class SimpleComponentOne {}

@Component({
  selector: 'app-simple-component-two',
  template: `<p>Simple Component Two works!</p>`,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
})
export class SimpleComponentTwo {}