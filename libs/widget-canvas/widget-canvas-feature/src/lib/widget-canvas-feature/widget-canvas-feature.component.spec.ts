import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetCanvasFeatureComponent } from './widget-canvas-feature.component';

describe('WidgetCanvasFeatureComponent', () => {
  let component: WidgetCanvasFeatureComponent;
  let fixture: ComponentFixture<WidgetCanvasFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetCanvasFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetCanvasFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
