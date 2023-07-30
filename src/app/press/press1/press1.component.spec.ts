import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Press1Component } from './press1.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Press1Component', () => {
  let component: Press1Component;
  let fixture: ComponentFixture<Press1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Press1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Press1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
