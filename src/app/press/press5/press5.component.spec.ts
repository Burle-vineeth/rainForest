import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press5Component } from './press5.component';

describe('Press5Component', () => {
  let component: Press5Component;
  let fixture: ComponentFixture<Press5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Press5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Press5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
