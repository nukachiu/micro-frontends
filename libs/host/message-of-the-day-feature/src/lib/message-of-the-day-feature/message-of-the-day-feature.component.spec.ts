import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageOfTheDayFeatureComponent } from './message-of-the-day-feature.component';

describe('MessageOfTheDayFeatureComponent', () => {
  let component: MessageOfTheDayFeatureComponent;
  let fixture: ComponentFixture<MessageOfTheDayFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageOfTheDayFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageOfTheDayFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
