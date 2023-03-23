import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press3Component } from './press3.component';

describe('Press3Component', () => {
  let component: Press3Component;
  let fixture: ComponentFixture<Press3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Press3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Press3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
