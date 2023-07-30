import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioMonitoringComponent } from './bio-monitoring.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BioMonitoringComponent', () => {
  let component: BioMonitoringComponent;
  let fixture: ComponentFixture<BioMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [BioMonitoringComponent, SubscribeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BioMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
