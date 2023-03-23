import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioMonitoringComponent } from './bio-monitoring.component';

describe('BioMonitoringComponent', () => {
  let component: BioMonitoringComponent;
  let fixture: ComponentFixture<BioMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
