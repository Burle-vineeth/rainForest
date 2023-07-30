import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModalComponent } from './home-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('HomeModalComponent', () => {
  let component: HomeModalComponent;
  let fixture: ComponentFixture<HomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeModalComponent],
      imports: [MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
