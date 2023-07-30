import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDonateComponent } from './money-donate.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MoneyDonateComponent', () => {
  let component: MoneyDonateComponent;
  let fixture: ComponentFixture<MoneyDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyDonateComponent],
      imports: [
        MatIconModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
