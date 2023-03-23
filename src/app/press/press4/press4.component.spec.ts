import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press4Component } from './press4.component';

describe('Press4Component', () => {
  let component: Press4Component;
  let fixture: ComponentFixture<Press4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Press4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Press4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
