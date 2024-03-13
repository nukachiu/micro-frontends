import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HostLibComponent } from './host-lib.component';

describe('HostLibComponent', () => {
  let component: HostLibComponent;
  let fixture: ComponentFixture<HostLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
