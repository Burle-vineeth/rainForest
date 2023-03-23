import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press1Component } from './press1.component';

describe('Press1Component', () => {
  let component: Press1Component;
  let fixture: ComponentFixture<Press1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Press1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Press1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
