import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutPutComponent } from './counter-out-put.component';

describe('CounterOutPutComponent', () => {
  let component: CounterOutPutComponent;
  let fixture: ComponentFixture<CounterOutPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
