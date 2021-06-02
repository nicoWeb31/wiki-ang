import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaodingSpinnerComponent } from './laoding-spinner.component';

describe('LaodingSpinnerComponent', () => {
  let component: LaodingSpinnerComponent;
  let fixture: ComponentFixture<LaodingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaodingSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaodingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
