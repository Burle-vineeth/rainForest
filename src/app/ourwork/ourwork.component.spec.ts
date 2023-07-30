import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworkComponent } from './ourwork.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OurworkComponent', () => {
  let component: OurworkComponent;
  let fixture: ComponentFixture<OurworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [OurworkComponent, SubscribeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
