import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDonateComponent } from './money-donate.component';

describe('MoneyDonateComponent', () => {
  let component: MoneyDonateComponent;
  let fixture: ComponentFixture<MoneyDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyDonateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
