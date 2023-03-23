import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDonateComponent } from './crypto-donate.component';

describe('CryptoDonateComponent', () => {
  let component: CryptoDonateComponent;
  let fixture: ComponentFixture<CryptoDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoDonateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
