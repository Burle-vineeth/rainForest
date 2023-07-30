import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurimpactComponent } from './ourimpact.component';
import { ImpactInfoComponent } from '../impact-info/impact-info.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OurimpactComponent', () => {
  let component: OurimpactComponent;
  let fixture: ComponentFixture<OurimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        OurimpactComponent,
        ImpactInfoComponent,
        SubscribeComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OurimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
