import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurimpactComponent } from './ourimpact.component';

describe('OurimpactComponent', () => {
  let component: OurimpactComponent;
  let fixture: ComponentFixture<OurimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurimpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
