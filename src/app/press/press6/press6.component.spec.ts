import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press6Component } from './press6.component';

describe('Press6Component', () => {
  let component: Press6Component;
  let fixture: ComponentFixture<Press6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Press6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Press6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
