import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatDetectionComponent } from './threat-detection.component';

describe('ThreatDetectionComponent', () => {
  let component: ThreatDetectionComponent;
  let fixture: ComponentFixture<ThreatDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
