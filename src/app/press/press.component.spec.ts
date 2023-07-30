import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressComponent } from './press.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PressComponent', () => {
  let component: PressComponent;
  let fixture: ComponentFixture<PressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressComponent, SubscribeComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
