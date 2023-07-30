import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDonateComponent } from './crypto-donate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CryptoDonateComponent', () => {
  let component: CryptoDonateComponent;
  let fixture: ComponentFixture<CryptoDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoDonateComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
