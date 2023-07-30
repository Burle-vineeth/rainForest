import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatDetectionComponent } from './threat-detection.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ThreatDetectionComponent', () => {
  let component: ThreatDetectionComponent;
  let fixture: ComponentFixture<ThreatDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ThreatDetectionComponent, SubscribeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreatDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
