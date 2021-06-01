import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  @Output() decr = new EventEmitter<void>();
  @Output() incr = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor(
    private store: Store<{counter: CounterState}>,
  ) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
