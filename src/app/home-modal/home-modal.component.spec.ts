import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModalComponent } from './home-modal.component';

describe('HomeModalComponent', () => {
  let component: HomeModalComponent;
  let fixture: ComponentFixture<HomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
