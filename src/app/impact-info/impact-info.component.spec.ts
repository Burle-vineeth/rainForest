import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInfoComponent } from './impact-info.component';

describe('ImpactInfoComponent', () => {
  let component: ImpactInfoComponent;
  let fixture: ComponentFixture<ImpactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
